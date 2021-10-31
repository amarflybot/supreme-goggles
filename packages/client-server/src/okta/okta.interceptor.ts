import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import * as oauth from 'axios-oauth-client';
import axios from 'axios';
import { OktaService } from './okta.service';

@Injectable()
export class OktaInterceptor implements NestInterceptor {
  constructor(
    private httpService: HttpService,
    private oktaService: OktaService,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const axiosRef = this.httpService.axiosRef;
    const clientCreds = this.oktaService.getCredentials();
    axiosRef.interceptors.request.use(function (config) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${clientCreds.access_token}`,
      };
      return config;
    });

    return next.handle();
  }
}
