import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { EmployeeService } from './services/employee.service';
import { DashboardService } from './services/dashboard.service';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { HeaderInterceptorService } from './services/header-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    MasterComponent,
    NavMainComponent,
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
  providers: [EmployeeService, DashboardService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
