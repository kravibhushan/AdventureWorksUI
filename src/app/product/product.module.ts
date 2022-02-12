import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';



@NgModule({
  declarations: [
    ViewproductComponent,
    CreateproductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
