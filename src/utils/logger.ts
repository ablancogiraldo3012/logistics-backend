import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { ILogger } from '../core/domain/interfaces/logger';

const winstonLogger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

// Implementación concreta de la interfaz
export const logger: ILogger = {
  info: (message, meta) => winstonLogger.info(message, meta),
  error: (message, meta) => winstonLogger.error(message, meta),
  warn: (message, meta) => winstonLogger.warn(message, meta),
  debug: (message, meta) => winstonLogger.debug(message, meta),
};