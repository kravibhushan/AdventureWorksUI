import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepersonComponent } from './createperson/createperson.component';
import { PeopleComponent } from './people/people.component';
import { ViewpersonComponent } from './viewperson/viewperson.component';


const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'viewPerson', component: ViewpersonComponent },
  { path: 'createPerson', component: CreatepersonComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
