import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from './common/config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfig } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [EnvConfig],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
    BookModule,
  ],
})
export class AppModule {}
