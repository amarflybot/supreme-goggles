import { HttpInterceptor } from './http.interceptor';
import { HttpService } from '@nestjs/axios';
import { OktaService } from './shared/okta.service';
import { ConfigService } from '@nestjs/config';

describe('OktaInterceptor', () => {
  let httpInterceptor: HttpInterceptor;
  let httpService: HttpService;
  const oktaService: OktaService = new OktaService(new ConfigService());
  beforeEach(async () => {
    httpInterceptor = new HttpInterceptor(httpService, oktaService);
  });

  it('should be defined', () => {
    expect(httpInterceptor).toBeDefined();
  });
});
