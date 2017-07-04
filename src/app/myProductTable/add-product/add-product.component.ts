import { Component, Output, EventEmitter } from '@angular/core';

import { Product } from "./../product";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: Product;
  private id: number;
  private name: string;
  private category: number;
  private price: number;


  @Output() add: EventEmitter<Product> = new EventEmitter();

  addProduct(value, e): void {
    this.product = new Product(this.id, this.name, this.price, this.category);
    this.add.emit(this.product);
  }

}
