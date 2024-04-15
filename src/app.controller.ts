import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('auth')
  async auth() {
    console.log('INSIDE Appcontroller AUTH')
    // logic for login
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
