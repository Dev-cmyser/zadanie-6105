import { Get, Controller } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping(): string {
    return this.appService.ping();
  }

  @Get()
  hello_secret(): string {
    return 'hello avito!';
  }
}
