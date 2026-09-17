import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  // app.use(json());
  // app.use(RequestDetailsMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
