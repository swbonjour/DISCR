import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './domain/auth/strategies/jwt.auth.guard';
import { globalConf } from './config/conf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix(globalConf.server.main.global_prefix);
  app.useGlobalPipes(new ValidationPipe());

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  await app.listen(globalConf.server.main.port);
}
bootstrap();
