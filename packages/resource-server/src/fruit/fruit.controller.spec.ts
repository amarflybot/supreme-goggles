import { Test, TestingModule } from '@nestjs/testing';
import { FruitController } from './fruit.controller';
import { FruitService } from './fruit.service';
import { AppService } from '../app.service';

describe('FruitController', () => {
  let controller: FruitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FruitController],
      providers: [FruitService, AppService],
    }).compile();

    controller = module.get<FruitController>(FruitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
