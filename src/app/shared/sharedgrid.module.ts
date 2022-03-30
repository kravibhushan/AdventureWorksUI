import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TestgridComponent } from './testgrid/testgrid.component';
import { ModelPopupComponent } from './model-popup/model-popup.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [GridComponent, TestgridComponent, ModelPopupComponent, DrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [GridComponent, ModelPopupComponent,DrawerComponent]
})
export class SharedGridModule { }
