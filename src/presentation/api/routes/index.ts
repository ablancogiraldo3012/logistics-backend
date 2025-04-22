import { Router } from 'express';
import swaggerRouter from '../../docs/swagger';

export const router = Router();

router.get('/', (req, res) => {
  res.send('API funcionando con Clean Architecture!');
});

// Swagger
router.use('/docs', swaggerRouter);