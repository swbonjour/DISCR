import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/db/entities/user.entity';
import { AuthSignInDto, AuthSignUpDto } from 'src/dto/auth.dto';
import { DataSource } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';
import * as moment from 'moment';

@Injectable()
export class AuthService {
  constructor(
    private readonly datasource: DataSource,
    private readonly jwtService: JwtService,
  ) {}

  public async signIn(dto: AuthSignInDto) {
    const existingUser = await this.datasource.manager.findOne(UserEntity, {
      where: { username: dto.username },
      select: ['password', 'email'],
    });

    if (!existingUser) {
      throw new HttpException("The user doesn't exist", HttpStatus.BAD_REQUEST);
    }

    const isPassCorrect = await bcrypt.compare(
      dto.password,
      existingUser.password,
    );

    if (!isPassCorrect) {
      throw new HttpException(
        'The password is incorrect',
        HttpStatus.BAD_REQUEST,
      );
    }

    const jwtToken = await this.jwtService.sign({
      username: dto.username,
      email: existingUser.email,
    });

    return jwtToken;
  }

  public async signUp(dto: AuthSignUpDto) {
    const isUserExist = await this.datasource.manager.exists(UserEntity, {
      where: [{ username: dto.username }, { email: dto.email }],
    });

    if (isUserExist) {
      throw new HttpException(
        'Username or email is already in use',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passHash = await bcrypt.hash(dto.password, 10);

    await this.datasource.manager.insert(UserEntity, {
      username: dto.username,
      password: passHash,
      email: dto.email,
      created_at: moment.utc().valueOf(),
    });

    const jwtToken = await this.jwtService.sign({
      username: dto.username,
      email: dto.email,
    });

    return jwtToken;
  }
}
