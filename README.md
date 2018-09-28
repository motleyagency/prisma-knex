# Prisma-Knex

Using Prisma with [`Knex.js`](https://knexjs.org/), A SQL Query Builder for Javascript for migrations.

> Due to limitations with [`prisma introspect`](https://www.prisma.io/docs/data-model-and-migrations/introspection-mapping-to-existing-db-soi1/), we can only use PostgreSQL databases.

## Prerequisites

- Knex.js (`npm install knex / yarn add knex`)
- Database
- `docker-compose`

## Configuration

TODO: Add configrations for the databases, make sure that migrations is set to false in PRISMA_CONFIG

## Creating migrations

First we will create a migration with `knex make:migration`

```bash
knex migrate:make --knexfile ./server/db create_user_table
```

This creates a migration to `server/db/migrations`, timestamped with the current date.

Next lets create some initial migration. You can use the `knex` query builder, but we'll use raw SQL for simplicity.

```js
const up = knex =>
  knex.raw(`
    CREATE TABLE users (
      id serial primary key,
      username text unique,
      email text unique,
      first_name text,
      last_name text,
      created_at timestamp not null default now(),
      updated_at timestamp not null default now()
    )
  `);

const down = knex =>
  knex.raw(`
  DROP TABLE users;
`);

module.exports = {
  up,
  down,
};
```

Excellent! Now we can migrate to the latest migration we have, which is that one!

```bash
knex migrate:latest --knexfile=./server/db/knexfile.js
```

## Introspection

Next we use `prisma introspect` to generate the datamodel based on the actual structure of the existing data on the PostgreSQL database.

WIP WIP
