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
exports.PostgreSQLConnection = void 0;
const typeorm_1 = require("typeorm");
class PostgreSQLConnection {
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!PostgreSQLConnection.instance) {
                const dataSource = new typeorm_1.DataSource({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT || '5432'),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    synchronize: false,
                    logging: process.env.NODE_ENV === 'development',
                });
                PostgreSQLConnection.instance = yield dataSource.initialize();
                console.log('✅ PostgreSQL conectado');
            }
            return PostgreSQLConnection.instance;
        });
    }
}
exports.PostgreSQLConnection = PostgreSQLConnection;
