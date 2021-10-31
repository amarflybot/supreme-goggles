import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { OktaService } from './shared/okta.service';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
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
