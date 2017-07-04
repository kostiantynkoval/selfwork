import { Component, OnInit, OnChanges, Input, Output, EventEmitter,OnDestroy } from '@angular/core';

import { Product } from "./../product";
import { PRODUCTS } from "./../mock-product";

import { MyTableDataService } from './../my-table-data.service';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  products: Product[];

  @Input() rows: number;
  @Input() categoryID: number;

  @Output() delete = new EventEmitter;

  ngOnInit() {
    this.products = PRODUCTS;
    
  }

  ngOnChanges() {
    console.log('changes in MyTableComponent');
  }

  isRed(price):boolean{
      if (price>500) {
          return true;
      } 
      else {
          return false;
      }

  }

  delElem(product: Product){
      this.delete.emit(product);
      console.log('pr: ', product);
  }

  ngOnDestroy() {
    console.log('MyTableComponent destroyed');
  }

}
