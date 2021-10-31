import { Injectable } from '@nestjs/common';
import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private oktaVerifier: any;
  private audience: string;

  constructor(private readonly config: ConfigService) {
    this.oktaVerifier = new OktaJwtVerifier({
      issuer: config.get('OKTA_ISSUER'),
    });

    this.audience = config.get('OKTA_AUDIENCE');
  }

  async validateToken(token: string): Promise<any> {
    const jwt = await this.oktaVerifier.verifyAccessToken(token, this.audience);
    return jwt;
  }
}
