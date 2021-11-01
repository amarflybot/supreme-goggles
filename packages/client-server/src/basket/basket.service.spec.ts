import { Test, TestingModule } from '@nestjs/testing';
import { BasketService } from './basket.service';
import { FruitService } from './fruit.service';
import { FruitDto } from './dto/fruit.dto';
import { Observable } from 'rxjs';

describe('BasketService', () => {
  let service: BasketService;
  const fruitServiceMock = {
    findOne(id: number): Observable<FruitDto> {
      return new Observable((subscriber) => {
        return subscriber.next({
          id: 1,
          name: 'mango',
        });
      });
    },
    findAll(): Observable<FruitDto[]> {
      return new Observable<FruitDto[]>((subscriber) => {
        subscriber.next([
          {
            id: 1,
            name: 'mango',
          },
        ]);
      });
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BasketService,
        { provide: FruitService, useValue: fruitServiceMock },
      ],
    }).compile();

    service = module.get<BasketService>(BasketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
