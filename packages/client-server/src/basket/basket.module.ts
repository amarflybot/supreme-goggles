import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from '../shared/shared.module';
import { FruitService } from './fruit.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, SharedModule],
  controllers: [BasketController],
  providers: [BasketService, FruitService],
})
export class BasketModule {}
