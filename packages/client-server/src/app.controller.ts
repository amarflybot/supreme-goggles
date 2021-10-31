import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HelloDto } from './hello.dto';
import { HttpInterceptor } from './http.interceptor';

@Controller()
@UseInterceptors(HttpInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<AxiosResponse<HelloDto>> {
    return this.appService.getHello();
  }
}
