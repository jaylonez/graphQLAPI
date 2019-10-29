import dotenv from 'dotenv-safe';
import { Config as KnexConfig } from 'knex';
import { readJsonFile } from './utils';
import { getEnv } from './utils';

import fs from 'fs';

const template = {
  client: 'postgresql',
  connection: {} as any,
  pool: {
    min: 1,
    max: 1,
  },
  migrations: {
    directory: `./server/db/migrations`,
  },
};

dotenv.config();

interface IConfig {
  rootDir: string;
  env: string;
  version: string;
  http: {
    port: number;
    originalErrorsInResponse: boolean;
  };
  database: KnexConfig['connection'];
}

const loadConfig = async (): Promise<IConfig> => {
  const rootDir = process.cwd();
  const env = process.env.NODE_ENV || 'production';
  // To keep package.json outside the build folder, do not use native import
  const packageJson = await readJsonFile(`${rootDir}/package.json`);
  return {
    rootDir,
    env,
    version: packageJson.version,
    http: {
      port: Number.parseInt(process.env.PORT || '3000', 10),
      originalErrorsInResponse: env !== 'production',
    },
    database: {
      charset: 'utf8mb4',
      timezone: 'UTC',
      user: getEnv('SQL_USER', true, 'postgres'),
      password: getEnv('SQL_PASSWORD', true, ''),
      database: getEnv('SQL_DATABASE', true, 'main'),
      ...(getEnv('SQL_SOCKET', true, '')
        ? {
            socketPath: getEnv('SQL_SOCKET'),
          }
        : {
            host: getEnv('SQL_HOST', true, 'localhost'),
            port: Number.parseInt(getEnv('SQL_PORT', true, '') || '5432', 10),
          }),
    },
  };
};

loadConfig()
  .then(config => {
    template.connection = config.database;

    const str = `export = ${JSON.stringify(template, null, 2)};\n`;

    return new Promise((resolve, reject) => {
      fs.writeFile('knexfile.ts', str, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  })
  .then(() => {
    console.info(`knexfile.ts for ${process.env.NODE_ENV || 'development'} environment created.`);
  })
  .catch(console.error);
