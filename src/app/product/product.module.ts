import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ViewproductComponent,
    CreateproductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
