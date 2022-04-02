import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavPersonComponent } from './nav-person/nav-person.component';
import { ViewpersonComponent } from './viewperson/viewperson.component';
import { CreatepersonComponent } from './createperson/createperson.component';
import { PersonRoutingModule } from './person-routing.module';
import { PeopleComponent } from './people/people.component';
import { SharedGridModule } from '../shared/sharedgrid.module';



@NgModule({
  declarations: [
    NavPersonComponent,
    ViewpersonComponent,
    CreatepersonComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedGridModule
  ]
})
export class PersonModule { }
