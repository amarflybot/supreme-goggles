import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { Fruit } from './entities/fruit.entity';

@Injectable()
export class FruitService implements OnModuleInit {
  private fruits: Fruit[] = [];

  onModuleInit() {
    this.fruits.push(new Fruit(1, 'mango'));
    this.fruits.push(new Fruit(2, 'apple'));
  }

  create(createFruitDto: CreateFruitDto): Fruit {
    const fruit = this.fruits.reduce((acc: Fruit, curr: Fruit) => {
      if (acc.id < curr.id) {
        acc = curr;
      }
      return acc;
    }, new Fruit(0, ''));
    const newFruit = {
      id: ++fruit.id,
      name: createFruitDto.name,
    };
    this.fruits.push(newFruit);
    return newFruit;
  }

  findAll(): Fruit[] {
    return this.fruits;
  }

  findOne(id: number): Fruit {
    return this.fruits.find((value) => value.id === id);
  }

  update(id: number, updateFruitDto: UpdateFruitDto): Fruit {
    const findOne = this.findOne(id);
    if (findOne === undefined) {
      throw new NotFoundException(`Fruit with id: ${id}`);
    }
    this.remove(id);
    this.fruits = [...this.fruits, { id: id, name: updateFruitDto.name }];
    return this.findOne(id);
  }

  remove(id: number): Fruit {
    const findOne = this.findOne(id);
    if (findOne === undefined) {
      throw new NotFoundException(`Fruit with id: ${id}`);
    }
    this.fruits = this.fruits.reduce((acc: Fruit[], curr: Fruit) => {
      if (id !== curr.id) {
        acc.push(curr);
      }
      return acc;
    }, []);

    return findOne;
  }
}
