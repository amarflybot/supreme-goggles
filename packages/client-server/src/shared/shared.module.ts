import { Module } from '@nestjs/common';
import { OktaService } from './okta.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot()],
  exports: [OktaService],
  providers: [OktaService],
})
export class SharedModule {}
