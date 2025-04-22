import express from 'express';
import { router } from '../../presentation/api/routes/index.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit'; 

export const createExpressServer = () => {
  const app = express();
  
  app.use(express.json());
  app.use('/api', router);  
  app.use(helmet());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  
  return app;
};