import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TestgridComponent } from './testgrid/testgrid.component';

@NgModule({
  declarations: [GridComponent,TestgridComponent],
  imports: [
    CommonModule
  ],
  exports: [GridComponent]
})
export class SharedGridModule { }
