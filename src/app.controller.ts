import { Controller, Get, Req, Query, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('a*pp')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  AppCont(@Req() request: Request, @Query() query: any): string {
    console.log(query);
    return 'app cont';
  }

  @Post()
  @HttpCode(204)
  anotherOne(): string {
    return 'another one';
  }
}
