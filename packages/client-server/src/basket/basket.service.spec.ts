import { Test, TestingModule } from '@nestjs/testing';
import { BasketService } from './basket.service';
import { FruitService } from './fruit.service';
import { FruitDto } from './dto/fruit.dto';
import { Observable } from 'rxjs';
import { Fruit } from './entities/basket.entity';
import { NotFoundException } from '@nestjs/common';

describe('BasketService', () => {
  let service: BasketService;
  const fruitServiceMock = {
    findOne(id: number): Observable<FruitDto> {
      return new Observable((subscriber) => {
        if (id === 1) {
          return subscriber.next({
            id: 1,
            name: 'mango',
          });
        } else {
          throw new NotFoundException();
        }
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

  it('should create a basket', () => {
    const basket = service.create({
      id: 10,
    });
    expect(basket).toEqual({
      id: 10,
      fruits: new Map(),
    });
  });

  it('should addFruits in a basket', () => {
    service.create({
      id: 10,
    });
    service
      .addFruitsInBasket(10, { fruitId: 1 })
      .subscribe((fruitsInBasket) => {
        const fruits = new Map();
        fruits.set(new Fruit(1, 'mango'), 1);
        expect(fruitsInBasket).toEqual({
          id: 10,
          fruits: fruits,
        });
        const baskets = service.findAll();
        expect(baskets).toEqual([
          {
            id: 10,
            fruits: fruits,
          },
        ]);
      });
  });

  it('should not addFruits in a basket', () => {
    service.create({
      id: 10,
    });
    service.addFruitsInBasket(10, { fruitId: 2 }).subscribe((value) => {
      const baskets = service.findAll();
      expect(baskets).toEqual([
        {
          id: 10,
          fruits: new Map(),
        },
      ]);
    });
  });
});
