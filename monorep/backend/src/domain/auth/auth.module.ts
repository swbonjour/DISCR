import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigType } from '@nestjs/config';
import { globalConf } from 'src/config/conf';

@Module({
  imports: [
    JwtModule.register({
      secret: globalConf.jwt.secret,
      signOptions: { expiresIn: globalConf.jwt.expires },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
