import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeService } from './services/employee.service';
import { DashboardService } from './services/dashboard.service';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    MasterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
    DropdownModule,
    MultiSelectModule
  ],
  providers: [EmployeeService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
