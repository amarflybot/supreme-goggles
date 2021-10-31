import { HttpInterceptor } from './http.interceptor';
import { HttpService } from '@nestjs/axios';
import { OktaService } from './shared/okta.service';

describe('OktaInterceptor', () => {
  it('should be defined', () => {
    expect(
      new HttpInterceptor(new HttpService(), new OktaService()),
    ).toBeDefined();
  });
});
