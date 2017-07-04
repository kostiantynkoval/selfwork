import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "./myProductTable/product";

@Pipe({
  name: 'firstNRows'
})
export class FirstNRowsPipe implements PipeTransform {

  transform(items: Product[], rows: number): Product[] {
      return items.filter((item, i)=>{
        if (i < rows) {
        return item;
        }
      })
      
  }

}
