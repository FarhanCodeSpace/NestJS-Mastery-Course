import {
  Controller,
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service';
import { UserDto } from './UserDTO/user.dto';
import bcrypt from 'bcrypt';

// @Controller('client')
@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    this.userService.createUser({
      ...user,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    });
    return 'user created successfully!'
  }

  @Get()
  getAllUsers(): UserDto[] {
    return this.userService.getAllUsers()
  }

  // @Post()
  // createMsg(@Body() msg: string) {
  //   console.log(msg);
  //   return 'message recieved successfully';
  // }

  // @Get()
  // getToken(@Req() req: Request) {
  //   const token = req['token']
  //   return {message: "Access Authorized", token}
  // }

  // @Get('getToken')
  // checkToken(@Req() req: Request) {
  //   const token = req['token']
  //   return {message: "Access Authorized", token}
  // }

  // @Get('client')
  // checkContentType() {
  //   return {message: "Welcome to /client route."}
  // }

  // @Get('route1')
  // route1(@Req() req: Request) {
  //   return {
  //     contentType: req.headers['content-type'],
  //     message: "This is route1 /client route."
  //   }
  // }
  // @Get('route2')
  // route2(@Req() req: Request) {
  //   return {
  //     contentType: req.headers['content-type'],
  //     message: "This is route2 /client route."
  //   }
  // }
  // @Get('route3')
  // route3(@Req() req: Request) {
  //   return {
  //     contentType: req.headers['content-type'],
  //     message: "This is route3 /client route."
  //   }
  // }
  // @Post('route4')
  // route4(@Req() req: Request) {
  //   return {
  //     contentType: req.headers['content-type'],
  //     message: "This is route4 /client route."
  //   }
  // }

  // @Post()
  // create(@Body() body: any) {
  //   return body;
  // }
 
  

}
