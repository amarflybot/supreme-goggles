import { Module } from '@nestjs/common';
import { FruitService } from './fruit.service';
import { FruitController } from './fruit.controller';
import { AppService } from '../app.service';

@Module({
  controllers: [FruitController],
  providers: [FruitService, AppService],
})
export class FruitModule {}
