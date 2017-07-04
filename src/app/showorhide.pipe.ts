import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "./myProductTable/product";

@Pipe({
  name: 'showorhide'
})
export class ShoworhidePipe implements PipeTransform {

  transform(items: Product[], cat_ID: number): Product[] {
    if (cat_ID == 0) { return items; }
    else {
      return items.filter((item)=>{
        if (item.category == cat_ID) {
        return item;
        }
      })
      
    }
  }



}
