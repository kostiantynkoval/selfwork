import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from "./../product";


@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {


  @Input() rows: number;
  @Input() categoryID: number;
  @Input() products: Product[];

  @Output() delete = new EventEmitter;

  ngOnInit() {
  }

  isRed(price):boolean{
      if (price>499) {
          return true;
      }
      else {
          return false;
      }
  }

  delElem(product: Product){
      this.delete.emit(product);
  }

}
