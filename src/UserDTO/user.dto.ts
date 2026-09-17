import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username Required!' })
  @MaxLength(20, { message: 'username can not be longer than 20 characters' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty({ message: 'Passowrd Required!' })
  @MinLength(8, { message: 'passowrd can not be longer than 8 characters' })
  readonly password: string;

  readonly createdAt?: string;
}
