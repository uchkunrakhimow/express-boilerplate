import type { Application, NextFunction, Request, Response } from 'express';
import express, { json, urlencoded } from 'express';
import routes from './routes';
import {
  sendBadRequestResponse,
  sendErrorResponse,
  sendNotFoundResponse,
} from '@helpers/responseHandler';
import { ZodError } from 'zod';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import path from 'node:path';

const app: Application = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express boilerplate',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT!}`,
        description: 'Development server',
      },
    ],
  },
  apis: [`${process.cwd()}/docs/*.yaml`],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(json());
app.use(cors());
app.use(
  urlencoded({
    extended: true,
  }),
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), '/client/dist')));

  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), '/client/dist/index.html'));
  });
}

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Server is live!' });
});

app.use(routes);
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    sendBadRequestResponse(res, err.flatten());
    return;
  }
  sendErrorResponse(res, 'Something went wrong');
});

app.use((req: Request, res: Response) => {
  sendNotFoundResponse(res, `Cannot ${req.method} ${req.path}`);
});

export default app;
