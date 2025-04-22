"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWebSocket = void 0;
const ws_1 = require("ws");
const initWebSocket = () => {
    const wss = new ws_1.WebSocketServer({ port: 8080 });
    wss.on('connection', (ws) => {
        ws.send('Conexión WebSocket establecida');
    });
    console.log('WebSocket en puerto 8080');
    return wss;
};
exports.initWebSocket = initWebSocket;
