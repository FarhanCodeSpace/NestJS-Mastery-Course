import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './authDto';
import { PhoneAuth } from './customPipe/phoneAuth';
import { customPipe } from './customPipe/cutomPipe';

@Controller('auth')
@UsePipes(new customPipe())
export class AuthController {
  @Get('register/:id')
  getId(@Param('id') id: string) {
    return {
      data: id,
    };
  }

  @Post('register')
  @UsePipes( PhoneAuth)
  registerUser(@Body() userData: AuthDto) {
    return {
      name: userData.name,
      Email: userData.email,
      Password: userData.password,
      country: userData.country,
      dob: userData.dob,
      phone: userData.phone,
    };
  }

  @Post('test')
  register(
    @Body('dob') dob: Date,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    return {
      data: dob,
      name: name,
      email: email,
    };
  }
}
