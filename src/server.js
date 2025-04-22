"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = require("./infrastructure/db/postgres");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 1. Conectar a PostgreSQL
        yield postgres_1.PostgreSQLConnection.connect();
        // 2. Inicializar servidor básico
        console.log('🚀 Servidor listo sin entidades específicas');
    }
    catch (error) {
        console.error('Error de inicialización:', error);
        process.exit(1);
    }
});
start();
