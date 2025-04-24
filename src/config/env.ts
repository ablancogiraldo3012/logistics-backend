import { cleanEnv, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
  // PostgreSQL
  POSTGRES_HOST: str({ default: 'localhost' }),
  POSTGRES_PORT: num({ default: 5432 }),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_DB: str(),
  POSTGRES_URL: str(),

  // Redis
  REDIS_URL: str(),

  // JWT
  JWT_SECRET: str(),

  // Entorno
  NODE_ENV: str({ choices: ['development', 'test', 'production'], default: 'development' }),
});