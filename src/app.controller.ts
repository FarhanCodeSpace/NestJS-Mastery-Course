import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getVal(@Param('id', new ParseUUIDPipe({ version: '7' })) id: string) {
    return `retrieved Id: ${id}`
  }
}
