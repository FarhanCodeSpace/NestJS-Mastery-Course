import { Type } from 'class-transformer';
import {
  IS_ALPHANUMERIC,
  IsAlpha,
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEmail,
  IsEmpty,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  length,
  Matches,
  MaxLength,
  MinLength,
  minLength,
} from 'class-validator';

export enum Country {
  PAK = 'PAK',
  NZ = 'NZ',
  RSA = 'RSA',
  IND = 'IND',
}

export class AuthDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8, {
    message:
      'password is too short, minimum length should be of $constraint1 characters',
  })
  @MaxLength(15, {
    message: 'password should be within $constraint1 charcters',
  })
  password: string;

  @IsEnum(Country)
  country: Country;

  @IsDateString()
  //   @Type(() => Date)
  dob: Date;

  @IsOptional()
  @IsNumber()
  phone: number;
}
