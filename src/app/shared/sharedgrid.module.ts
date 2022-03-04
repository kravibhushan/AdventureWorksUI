import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TestgridComponent } from './testgrid/testgrid.component';
import { ModelPopupComponent } from './model-popup/model-popup.component';

@NgModule({
  declarations: [GridComponent, TestgridComponent, ModelPopupComponent],
  imports: [
    CommonModule
  ],
  exports: [GridComponent, ModelPopupComponent]
})
export class SharedGridModule { }
