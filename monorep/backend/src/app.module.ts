import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './domain/auth/auth.module';
import { conf } from './config/conf';

import ormConfig from './db/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [conf] }),
    TypeOrmModule.forRoot(ormConfig),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
