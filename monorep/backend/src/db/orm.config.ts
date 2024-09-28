import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';

import allEnitities from './entities/allEnitities';

import * as path from 'path';

configDotenv();

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  migrations: [path.resolve(__dirname, '/migrations', '/*.{ts,js}')],
  maxQueryExecutionTime: 1000,
  logging: ['error', 'migration', 'warn'],
  logger: 'advanced-console',
  entities: allEnitities,
  synchronize: true,
};

export default ormConfig;
