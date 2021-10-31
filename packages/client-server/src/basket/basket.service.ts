import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketWithFruitDto } from './dto/update-basket.dto';
import { Basket, Fruit } from './entities/basket.entity';
import { FruitService } from './fruit.service';
import { FruitDto } from './dto/fruit.dto';

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

  addFruitsInBasket(id: number, updateBasketDto: UpdateBasketWithFruitDto) {
    const basket = this.findOne(id);
    this.fruitService.findOne(updateBasketDto.fruitId).subscribe((value) => {
      const fruitDto = value as FruitDto;
      const fruit = new Fruit(fruitDto.id, fruitDto.name);
      if (basket.fruits.has(fruit)) {
        basket.fruits.set(fruit, basket.fruits.get(fruit) + 1);
      } else {
        basket.fruits.set(fruit, 1);
      }
    });
    return `This action updates a #${id} basket`;
  }

  remove(id: number) {
    return `This action removes a #${id} basket`;
  }
}
