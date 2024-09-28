import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
  StrategyOptionsWithoutRequest,
} from 'passport-jwt';
import { globalConf } from 'src/config/conf';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: globalConf.jwt.secret,
    } satisfies StrategyOptionsWithoutRequest);
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
