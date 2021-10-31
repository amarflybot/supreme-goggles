import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HelloDto } from './hello.dto';
import { OktaInterceptor } from './okta/okta.interceptor';

@Controller()
@UseInterceptors(OktaInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<AxiosResponse<HelloDto>> {
    return this.appService.getHello();
  }
}
