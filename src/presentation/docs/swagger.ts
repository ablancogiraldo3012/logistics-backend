import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import * as swaggerJson from './swagger.json';

const swaggerRouter = express.Router();

swaggerRouter.use('/', serve);
swaggerRouter.get('/', setup(swaggerJson));

export default swaggerRouter;