import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/auth/:password')
  admin(@Param() params): {
    code: string;
  } {
    return this.appService.adminAccess(params.password);
  }
}
