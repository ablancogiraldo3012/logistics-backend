import { DataSource } from 'typeorm';

export class PostgreSQLConnection {
  private static instance: DataSource;

  static async connect(): Promise<DataSource> {
    if (!PostgreSQLConnection.instance) {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || '5432'),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        logging: process.env.NODE_ENV === 'development',
      });

      PostgreSQLConnection.instance = await dataSource.initialize();
      console.log('✅ PostgreSQL conectado');
    }
    return PostgreSQLConnection.instance;
  }
}