export class Product {
    id: number;
    name: string;
    price: number;
    category: number;

    constructor(id, name, price = 0, category){
      this.id = id;
      this.name = name;
      this.price = price;
      this.category = category;
    }
}
