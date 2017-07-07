import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Product } from "./product";
import { PRODUCTS } from "./mock-product";

@Injectable()
export class MyTableDataService {

    private products: Product[] = PRODUCTS;

    getProducts(): Product[] {
        return this.products;
    }

    deleteProduct(product):void {
        let index = this.products.indexOf(product);
        if (index!=-1) {
            this.products.splice(index, 1);
        }
    }

    addProduct(product):void {
      this.products.push(product);
    }
}
