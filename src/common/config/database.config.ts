import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvConfig } from './env.config';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const { database: databaseConfig } = EnvConfig();
    // console.log(envConfig); //para verificar que las variables se estan carganado correctamente
    return {
      type: 'postgres',
      host: databaseConfig.host,
      port: databaseConfig.port,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.database,
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo; no usar en producción
      logging: true, // Habilita el logging
      logger: 'advanced-console', // Configura el logger para mostrar consultas SQL
    };
  }
}
