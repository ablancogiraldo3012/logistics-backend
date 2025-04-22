import { PostgreSQLConnection } from './infrastructure/db/postgres';
import { logger } from './utils/logger';

const start = async () => {
  try {
    
    await PostgreSQLConnection.connect();
    
    logger.info('🚀 Servidor listo sin entidades específicas');
    console.log('🚀 Servidor listo sin entidades específicas');
    
  } catch (error) {
    console.error('Error de inicialización:', error);
    process.exit(1);
  }
};

start();