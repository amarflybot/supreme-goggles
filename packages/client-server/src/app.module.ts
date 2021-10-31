import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { OktaService } from './okta/okta.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [BasketModule, HttpModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, OktaService],
})
export class AppModule {}
