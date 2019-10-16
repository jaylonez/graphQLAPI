import knex from 'knex';

const config = {
  client: 'postgresql',
  connection: {
    host: '127.0.0.1',
    port: '5433',
    database: 'postgres',
    user: 'postgres',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `./migrations`,
  },
};

async function init() {
  return knex(config);
}

export default init;
