import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { MasterComponent } from './master/master.component';
import { DrawerComponent } from './shared/drawer/drawer.component';
import { TestgridComponent } from './shared/testgrid/testgrid.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'master', component: MasterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TestgridComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
