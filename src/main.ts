import { join } from 'path';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';

import { AppModule } from './app.module';

/**
 *
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api');

  app.getHttpAdapter().get('/', (request, res) => {
    res.send('Привет Avito!');
  });

  const swaggerDocument = YAML.load(join(__dirname, '../задание/openapi.yml'));

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  await app.listen(8080);
}

bootstrap();
