import { cleanEnv, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
  POSTGRES_HOST: str(),
  JWT_SECRET: str(),
  NODE_ENV: str({ choices: ['development', 'test', 'production'] }),
});