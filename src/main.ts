import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { GlobalValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new GlobalValidationPipe());
  const dataSource = app.get(DataSource);
  if (dataSource.isInitialized) {
    console.log('Connection to the database was successful');
  } else {
    console.log('There was an error connecting to the database');
  }

  await app.listen(3000, () =>
    console.log(`Application running on port ${3000}`),
  );
}
bootstrap();
