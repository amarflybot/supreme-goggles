import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HelloDto } from './hello.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private RESOURCE_URL: string;

  constructor(
    private httpService: HttpService,
    private configServer: ConfigService,
  ) {
    this.RESOURCE_URL =
      process.env.RESOURCE_SERVICE ||
      this.configServer.get<string>('RESOURCE_SERVICE');
  }

  getHello(): Observable<AxiosResponse<HelloDto>> {
    try {
      return this.httpService.get(this.RESOURCE_URL).pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
