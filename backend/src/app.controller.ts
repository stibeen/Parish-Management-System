import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':id')
  // getHelloById(@Param() params: any): string {
  //   return this.appService.getHelloById(params.id);
  // }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }
}
