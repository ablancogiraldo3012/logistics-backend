import { DataSource } from 'typeorm';
import { createConnection, getConnection } from 'typeorm';

export const createTestDB = async () => {
  const connection = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5433'),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    dropSchema: true,
    entities: ['src/core/domain/**/*.ts'],
  });

  await connection.initialize();
  return connection;
};

export const closeTestDB = async () => {
  await getConnection().close();
};

// Mock de Redis/JWT para pruebas unitarias
jest.mock('redis', () => ({
  createClient: jest.fn().mockReturnValue({
    connect: jest.fn(),
    on: jest.fn(),
  }),
}));