import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService, SaySometing } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/say')
  saySometing(): SaySometing {
    return this.appService.saySometing();
  }
  @Post()
  getHelloPost(@Body() body: any, @Param('id') id: string): any {
    return this.appService.getHelloPost(body);
  }
}
