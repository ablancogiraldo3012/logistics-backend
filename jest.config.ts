import type { Config } from '@jest/types';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/server.ts',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};

export default config;