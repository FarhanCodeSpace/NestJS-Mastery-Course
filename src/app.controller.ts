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
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('admin')
export class AppController {
  constructor(private readonly userService: UserService) {}

  // @Post('create')
  // @UseGuards(AuthGuard)
  // create(@Body() data: any) {
  //   return data;
  // }

  // @Get(':id/:name')
  // @UseGuards(AuthGuard)
  // getValue(@Param('id') id: string, @Param('name') name: string, @Query() query: string ) {
  //   return {id, name, query}
  // }

//   @Get('users')
//   // @UseGuards(AuthGuard)
//   getUser() {
//     return this.userService.getUsers();
//   }
}
