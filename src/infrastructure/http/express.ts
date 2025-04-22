import express from 'express';
import { router } from '../../presentation/api/routes/index.js';

export const createExpressServer = () => {
  const app = express();
  
  app.use(express.json());
  app.use('/api', router);
  
  return app;
};