const up = knex =>
  knex.raw(`
    CREATE TABLE user_table (
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
  DROP TABLE user;
`);

module.exports = {
  up,
  down,
};
