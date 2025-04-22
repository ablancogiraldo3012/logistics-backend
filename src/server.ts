import { PostgreSQLConnection } from './infrastructure/db/postgres';

const start = async () => {
  try {
    
    await PostgreSQLConnection.connect();
    
    console.log('🚀 Servidor listo sin entidades específicas');
    
  } catch (error) {
    console.error('Error de inicialización:', error);
    process.exit(1);
  }
};

start();