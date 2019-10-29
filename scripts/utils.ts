import { isNil } from 'lodash';
import fs from 'fs';

export function getEnv(key: string, withPrefix: boolean = true, defaultValue?: string) {
  let value = process.env[key];

  if (withPrefix) {
    const prefix = `${process.env.ENV_PREFIX}_` || '';
    value = !isNil(process.env[prefix + key]) ? process.env[prefix + key] : value;
  }

  if (!value && typeof value !== 'string') {
    if (!isNil(defaultValue)) {
      return defaultValue;
    }
    throw new Error(`Value of key ${key} not found or is empty.`);
  }
  return value.trim();
}

export function doesFileExist(path: string) {
  return new Promise(resolve => {
    fs.exists(path, resolve);
  });
}

export async function readFile(path: string, encoding = 'utf8'): Promise<string> {
  if (!(await doesFileExist(path))) {
    throw new Error(`File ${path} not found.`);
  }
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

export async function readJsonFile<T = any>(path: string, encoding = 'utf8'): Promise<T> {
  const fileContent = await readFile(path, encoding);
  return JSON.parse(fileContent);
}
