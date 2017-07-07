import { Component, OnInit, OnChanges } from '@angular/core';

import { Product } from "./../product";
import { PRODUCTS } from "./../mock-product";

import { MyTableDataService } from './../my-table-data.service';

@Component({
  moduleId: module.id,
  selector: 'app-my-table-wrapper',
  templateUrl: './my-table-wrapper.component.html',
  styleUrls: ['./my-table-wrapper.component.css'],
  providers: [MyTableDataService]
})
export class MyTableWrapperComponent implements OnInit {

    rows: number;
    products: Product[];
    categoryValue: number;

    constructor(private myTableDataService: MyTableDataService){}

    ngOnInit() {
      this.products = this.myTableDataService.getProducts();
      this.categoryValue = 0;
    }

    selectedProduct(data):void {
      this.categoryValue = data.target.value;
    }

    onDelete(product){
        this.myTableDataService.deleteProduct(product);
    }

    onAdd(product){
        this.myTableDataService.addProduct(product);
    }

    ngOnChanges() {
    console.log('changes in MyTableWrapperComponent');
  }

  ngOnDestroy() {
    console.log('MyTableWrapperComponent destroyed');
  }

}
