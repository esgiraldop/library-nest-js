import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { GlobalValidationPipe } from './common/pipes/validation.pipe';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('This API helps users')
    .setVersion('1.0')
    .addTag('library')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, () =>
    console.log(`Application running on port ${PORT}`),
  );
}
bootstrap();
