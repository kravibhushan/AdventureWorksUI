

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  { path: '', component: ViewproductComponent },
  { path: 'viewProduct', component: ViewproductComponent },
  { path: 'createProduct', component: CreateproductComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
