"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpressServer = void 0;
const express_1 = __importDefault(require("express"));
const index_js_1 = require("../../presentation/api/routes/index.js");
const createExpressServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/api', index_js_1.router);
    return app;
};
exports.createExpressServer = createExpressServer;
