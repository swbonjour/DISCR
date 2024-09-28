import { ConfigType, registerAs } from '@nestjs/config';
import { configDotenv } from 'dotenv';

configDotenv();

const conf = registerAs('global', () => ({
  server: {
    main: {
      global_prefix: process.env.GLOBAL_PREFIX || '/api/v1',
      port: parseInt(process.env.PORT, 10) || 3000,
    },
  },
  db: {
    url: process.env.DB_URL_TEMPLATE.replace('{user}', process.env.DB_USER)
      .replace('{pass}', process.env.DB_PASS)
      .replace('{host}', process.env.DB_HOST)
      .replace('{port}', process.env.DB_PORT)
      .replace('{db_name}', process.env.DB_NAME),
  },
  jwt: { secret: process.env.JWT_SECRET, expires: process.env.JWT_EXPIRES },
}));

const globalConf: ConfigType<typeof conf> = conf();

export { conf, globalConf };
