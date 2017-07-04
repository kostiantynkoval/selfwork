import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyTableWrapperComponent } from './myProductTable/my-table-wrapper/my-table-wrapper.component';
import { MyTableComponent } from './myProductTable/my-table/my-table.component';
import { ShoworhidePipe } from './showorhide.pipe';
import { FirstNRowsPipe } from './first-nrows.pipe';
import { AddProductComponent } from './myProductTable/add-product/add-product.component';

import { MyTableDataService } from './myProductTable/my-table-data.service';


@NgModule({
  declarations: [
    AppComponent,
    MyTableWrapperComponent,
    MyTableComponent,
    ShoworhidePipe,
    FirstNRowsPipe,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyTableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
