import { OktaInterceptor } from './okta.interceptor';
import { HttpService } from '@nestjs/axios';
import { OktaService } from './okta.service';

describe('OktaInterceptor', () => {
  it('should be defined', () => {
    expect(
      new OktaInterceptor(new HttpService(), new OktaService()),
    ).toBeDefined();
  });
});
