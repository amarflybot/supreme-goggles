import { Test, TestingModule } from '@nestjs/testing';
import { FruitService } from './fruit.service';

describe('FruitService', () => {
  let service: FruitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FruitService],
    }).compile();

    service = module.get<FruitService>(FruitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a Fruit', () => {
    const fruit = service.create({ name: 'mango' });
    expect(fruit).toEqual({
      id: 1,
      name: 'mango',
    });
  });

  it('should findAll', () => {
    service.create({ name: 'mango' });
    const fruit = service.findAll();
    expect(fruit).toEqual([
      {
        id: 1,
        name: 'mango',
      },
    ]);
  });

  it('should find a Fruit wih id 1', () => {
    service.create({ name: 'mango' });
    const fruit = service.findOne(1);
    expect(fruit).toEqual({
      id: 1,
      name: 'mango',
    });
  });

  it('should update a Fruit wih id 1', () => {
    service.create({ name: 'mango' });
    const fruit = service.update(1, { name: 'apple' });
    expect(fruit).toEqual({
      id: 1,
      name: 'apple',
    });
  });

  /*it('should throw exception a Fruit wih id unknown', () => {
    service.create({ name: 'mango' });
    expect(service.update(2, { name: 'apple' })).toThrowError(
      new NotFoundException('Fruit with id: 2'),
    );
  });*/

  it('should remove a Fruit wih id 1', () => {
    service.create({ name: 'mango' });
    service.remove(1);
    expect(service.findOne(1)).toBeUndefined();
  });
});
