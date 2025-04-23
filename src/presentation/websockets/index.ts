import { WebSocketServer } from 'ws';
import { logger } from '../../utils/logger';

export const initWebSocket = () => {
  const wss = new WebSocketServer({ port: 8080 });
  
  wss.on('connection', (ws) => {
    ws.send('Conexión WebSocket establecida');
  });
  
  logger.info('WebSocket en puerto 8080');  
  return wss;
};