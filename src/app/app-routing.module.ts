import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'master', component: MasterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
