import { Component, OnInit } from '@angular/core';

import { Product } from "./../product";
import { PRODUCTS } from "./../mock-product";

import { MyTableDataService } from './../my-table-data.service';

@Component({
  moduleId: module.id,
  selector: 'app-my-table-wrapper',
  templateUrl: './my-table-wrapper.component.html',
  styleUrls: ['./my-table-wrapper.component.css']
})
export class MyTableWrapperComponent implements OnInit {

    rows: number;
    products: Product[];
    categoryValue: number;

    ngOnInit() {
      this.products = PRODUCTS;
      this.categoryValue = 0;
    }

    selectedProduct(data):void {
      this.categoryValue = data;
    }

    deleteProduct(product):void {
        let index = this.products.indexOf(product);
        console.log(index);
        if (index!=-1) {
            this.products.splice(index, 1);
        }
    }

    addProduct(product):void {
      this.products.push(product);
    }

    ngOnChanges() {
    console.log('changes in MyTableWrapperComponent');
  }

  ngOnDestroy() {
    console.log('MyTableWrapperComponent destroyed');
  }

}
