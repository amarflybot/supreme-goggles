import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HelloDto } from './hello.dto';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): Observable<AxiosResponse<HelloDto>> {
    try {
      return this.httpService.get('http://localhost:3001').pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
    } catch (e) {
      console.log('error');
    }
  }
}
