import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketWithFruitDto } from './dto/update-basket.dto';
import { Basket, Fruit } from './entities/basket.entity';
import { FruitService } from './fruit.service';
import { map, Observable } from 'rxjs';

@Injectable()
export class BasketService {
  private baskets: Basket[] = [];

  constructor(private fruitService: FruitService) {}

  create(createBasketDto: CreateBasketDto): Basket {
    const basket = new Basket(createBasketDto.id);
    this.baskets.push(basket);
    return basket;
  }

  findAll() {
    return this.baskets;
  }

  findAllFruits() {
    return this.fruitService.findAll();
  }

  findOne(id: number): Basket {
    return this.baskets.find((value) => value.id === id);
  }

  addFruitsInBasket(
    id: number,
    updateBasketDto: UpdateBasketWithFruitDto,
  ): Observable<Basket> {
    const basket = this.findOne(id);
    return this.fruitService.findOne(updateBasketDto.fruitId).pipe(
      map((fruitDto) => {
        const fruit = new Fruit(fruitDto.id, fruitDto.name);
        if (basket.fruits.has(fruit)) {
          basket.fruits.set(fruit, basket.fruits.get(fruit) + 1);
        } else {
          basket.fruits.set(fruit, 1);
        }
        this.remove(id);
        this.baskets = [...this.baskets, basket];
        return this.findOne(id);
      }),
    );
  }

  remove(id: number) {
    const findOne = this.findOne(id);
    if (findOne === undefined) {
      throw new NotFoundException(`Fruit with id: ${id}`);
    }
    this.baskets = this.baskets.reduce((acc: Basket[], curr: Basket) => {
      if (id !== curr.id) {
        acc.push(curr);
      }
      return acc;
    }, []);
    return `This action removes a #${id} basket`;
  }
}
