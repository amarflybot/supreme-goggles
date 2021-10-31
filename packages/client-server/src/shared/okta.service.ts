import { Injectable, Logger } from '@nestjs/common';
import * as oauth from 'axios-oauth-client';
import axios from 'axios';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class OktaService {
  private clientCredentials;
  private readonly logger = new Logger(OktaService.name);
  constructor() {
    this.clientCredentials = this.getClientCredentials();
  }

  getCredentials() {
    return this.clientCredentials;
  }

  async getClientCredentials() {
    this.clientCredentials = await oauth.client(axios.create(), {
      url: 'https://acmamarflybot.okta.com/oauth2/aus53f2q22BVsNMk8696/v1/token',
      grant_type: 'client_credentials',
      client_id: '0oa53ehmxXxEq9z2Y696',
      client_secret: '2l4nYiKwGymLJWXkfcq8Pmn91OIHP8iR-8HU4ylb',
      scope: 'read:hello query:fruit',
    })();
    return this.clientCredentials;
  }

  @Cron('*/300 * * * * *')
  handleCron() {
    this.getClientCredentials().then(() => {
      this.logger.log('Client Credentials Refreshed');
    });
  }
}
