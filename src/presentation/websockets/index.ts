import { WebSocketServer } from 'ws';

export const initWebSocket = () => {
  const wss = new WebSocketServer({ port: 8080 });
  
  wss.on('connection', (ws) => {
    ws.send('Conexión WebSocket establecida');
  });
  
  console.log('WebSocket en puerto 8080');
  return wss;
};