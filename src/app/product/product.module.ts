import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { NavProductComponent } from './nav-product/nav-product.component';



@NgModule({
  declarations: [
    ViewproductComponent,
    CreateproductComponent,
    ProductsComponent,
    NavProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
