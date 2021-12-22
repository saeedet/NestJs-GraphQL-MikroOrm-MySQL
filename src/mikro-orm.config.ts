import { Options } from '@mikro-orm/core';
import * as path from 'path';

const config: Options = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  migrations: {
    path: path.join(__dirname, './migrarions'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default config;
