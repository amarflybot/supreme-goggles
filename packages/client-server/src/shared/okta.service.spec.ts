import { Test, TestingModule } from '@nestjs/testing';
import { OktaService } from './okta.service';
import { ConfigService } from '@nestjs/config';

describe('OktaService', () => {
  let service: OktaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OktaService, ConfigService],
    }).compile();

    service = module.get<OktaService>(OktaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
