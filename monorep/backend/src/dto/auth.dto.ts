import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AbstractAuthSignDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(12, { message: "Username can't be shorter than 12 characters" })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: "Password can't be shorter than 6 characters" })
  password: string;
}

export class AuthSignInDto extends AbstractAuthSignDto {}

export class AuthSignUpDto extends AbstractAuthSignDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
