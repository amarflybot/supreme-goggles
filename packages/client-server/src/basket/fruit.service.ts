import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { FruitDto } from './dto/fruit.dto';

@Injectable()
export class FruitService {
  private FRUIT_SERVICE_URL: string;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.FRUIT_SERVICE_URL =
      (process.env.RESOURCE_SERVICE ||
        this.configService.get<string>('RESOURCE_SERVICE')) + '/fruit';
  }

  findAll(): Observable<FruitDto[]> {
    try {
      return this.httpService.get(this.FRUIT_SERVICE_URL).pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }

  findOne(id: number): Observable<FruitDto> {
    try {
      return this.httpService.get(this.FRUIT_SERVICE_URL + `/${id}`).pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
      );
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
