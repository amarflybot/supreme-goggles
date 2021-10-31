import { Module } from '@nestjs/common';
import { OktaService } from './okta.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  exports: [OktaService],
  providers: [OktaService],
})
export class SharedModule {}
