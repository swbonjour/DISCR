import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDto, AuthSignUpDto } from 'src/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/reflectors/auth.reflrector';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('sign-in')
  @Public()
  async signIn(@Query() dto: AuthSignInDto) {
    return await this.authService.signIn(dto);
  }

  @Post('sign-up')
  @Public()
  async signUp(@Body() dto: AuthSignUpDto) {
    return await this.authService.signUp(dto);
  }
}
