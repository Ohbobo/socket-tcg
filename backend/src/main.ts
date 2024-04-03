import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173', // Remplacez par l'URL de votre application React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  };

  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
