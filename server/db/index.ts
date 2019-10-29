import knex from 'knex';
import knexConfig from '../../knexfile';

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
    directory: `./server/db/migrations`,
  },
};

async function init() {
  return knex(knexConfig);
}

export default init;
