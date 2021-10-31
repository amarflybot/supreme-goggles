import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { AuthGuard } from '@nestjs/passport';
import { Scope } from './scope.decorator';
import { ScopeGuard } from './scope.guard';

@Controller()
@UseGuards(AuthGuard('bearer'), ScopeGuard)
export class AppController {
  private oktaJwtVerifier: OktaJwtVerifier;
  constructor(private readonly appService: AppService) {
    this.oktaJwtVerifier = new OktaJwtVerifier({
      issuer:
        process.env.ISSUER ||
        'https://acmamarflybot.okta.com/oauth2/aus53f2q22BVsNMk8696',
    });
  }

  @Get()
  @Scope('read:hello')
  getHello(): string {
    return 'from Resource ' + this.appService.getHello();
  }
}
