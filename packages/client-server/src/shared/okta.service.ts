import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as oauth from 'axios-oauth-client';
import axios from 'axios';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OktaService implements OnModuleInit {
  private clientCredentials;
  private readonly logger = new Logger(OktaService.name);
  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.clientCredentials = this.getClientCredentials();
    this.handleCron();
  }

  getCredentials() {
    return this.clientCredentials;
  }

  async getClientCredentials() {
    this.clientCredentials = await oauth.client(axios.create(), {
      url: this.configService.get<string>('ISSUER_URL'),
      grant_type: 'client_credentials',
      client_id: this.configService.get<string>('CLIENT_CREDENTIAL'),
      client_secret: this.configService.get<string>('CLIENT_SECRET'),
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
