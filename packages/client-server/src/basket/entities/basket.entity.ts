export class Basket {
  id: number;
  fruits: Map<Fruit, number>;
  constructor(id: number) {
    this.id = id;
    this.fruits = new Map<Fruit, number>();
  }
}

export class Fruit {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
