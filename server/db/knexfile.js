// Update with your config settings.
require('dotenv').config({ path: '../../.env' });

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_SCHEMA,
  POSTGRES_HOST,
  POSTGRES_PORT,
} = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
    },
  },
  staging: {
    client: 'pg',
    connection: {
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
    },
  },
  production: {
    client: 'pg',
    connection: {
      database: POSTGRES_DB,
      user: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
    },
  },
};
