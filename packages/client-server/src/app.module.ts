import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, BasketModule, SharedModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
