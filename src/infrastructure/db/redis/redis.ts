import { createClient, RedisClientType } from 'redis';
import { logger } from '../../../utils/logger';
import { env } from '../../../config/env'; // Corregida la ruta

export class RedisConnection {
  private static client: RedisClientType;

  static async getClient(): Promise<RedisClientType> {
    if (!this.client?.isOpen) {
      await this.connect();
    }
    return this.client;
  }

  private static async connect(): Promise<void> {
    this.client = createClient({
      url: env.REDIS_URL,
    });

    this.client.on('error', (err) => logger.error('Redis Client Error', err));
    
    await this.client.connect();
    logger.info('Connected to Redis');
  }

  static async disconnect(): Promise<void> {
    if (this.client?.isOpen) {
      await this.client.quit();
    }
  }
}