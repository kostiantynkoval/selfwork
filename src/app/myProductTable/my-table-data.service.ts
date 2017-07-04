import { Injectable } from '@angular/core';

import { Product } from "./product";
import { PRODUCTS } from "./mock-product";

@Injectable()
export class MyTableDataService {

    products: Product[] = PRODUCTS;

    getProducts(): Product[] {
        return this.products;
    }

    
}
