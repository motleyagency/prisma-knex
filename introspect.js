require('dotenv').config();
const {
  Introspector,
  PostgresConnector,
  // PrismaDBClient,
} = require('prisma-db-introspection');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const chalk = require('chalk');
const { Client } = require('pg');

const credentials = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  alreadyData: true,
  schema: process.env.POSTGRES_SCHEMA,
  ssl: false,
};

const client = new Client(credentials);

const connector = new PostgresConnector(client);
const introspector = new Introspector(connector);

// eslint-disable-next-line no-unused-vars
let schemas;

(async () => {
  try {
    schemas = await introspector.listSchemas();
  } catch (e) {
    throw new Error(`Could not connect to database. ${e.message}`);
  }
})();

(async () => {
  try {
    const { sdl, numTables } = await introspector.introspect(
      process.env.POSTGRES_SCHEMA,
    );
    await client.end();
    if (numTables === 0) {
      console.log(
        chalk.red(
          `\n${chalk.bold(
            'Error: ',
          )}The provided database doesn't contain any tables. Please provide another database.`,
        ),
      );
      process.exit(1);
    }
    const fileName = `datamodel-${new Date().getTime()}.prisma`;
    const fullFileName = path.join('./server/db/datamodels/', fileName);
    fs.writeFileSync(fullFileName, sdl);
    // this.out.action.stop(prettyTime(Date.now() - before))
    console.log(
      `Created datamodel definition based on ${numTables} database tables.`,
    );
    console.log(`\
      ${chalk.bold(
        'Created 1 new file:',
      )}    GraphQL SDL-based datamodel (derived from existing database)

      ${chalk.cyan(fileName)}
    `);
    try {
      const datamodelYaml = yaml.safeLoad(
        fs.readFileSync('prisma.yml', 'utf8'),
      );
      const updatedDatamodel = {
        ...datamodelYaml,
        datamodel: fullFileName,
      };
      fs.writeFileSync(
        'prisma.yml',
        yaml.safeDump(updatedDatamodel, { encoding: 'utf8' }),
        { encoding: 'utf-8' },
      );
      console.log(
        `Added ${chalk.bold(`datamodel: ${fileName}`)} to prisma.yml`,
      );
    } catch (e) {
      console.log(e);
    }
    // if (!this.definition.definition!.datamodel) {
    //   this.definition.addDatamodel(fileName)
    //   this.out.log(
    //     `Added ${chalk.bold(`datamodel: ${fileName}`)} to prisma.yml`,
    //   )
    // }
    // } else {
    //   throw new Error(`Could not find schema in provided database.`)
    // }
  } catch (e) {
    throw new Error(e.message);
  }
})();
