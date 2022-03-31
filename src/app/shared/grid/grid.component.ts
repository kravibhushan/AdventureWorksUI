import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, Renderer2, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
 

  @Input("JsonData") inputJsonData: any[] = [];
  @Input("Columns") inputcolumns: any[] = [];

  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();
  dataKeyArray: string[] = [];
  totalrecord: number = 0;

  gridData: any[] = [];

  constructor(private http: HttpClient, private renderer: Renderer2) {
    this.gridData = this.inputJsonData;
    this.totalrecord = this.inputJsonData.length;
  }

  ngOnInit(): void {
    this.loadData();
    this.getKeysFromColumnHeader();
  }

  loadData() {
  }

  toggleOrder: boolean = true;
  onShort(datakey: any, columDataType: any) {
    this.inputJsonData.sort(this.GetSortOrder(datakey, this.toggleOrder))
    this.toggleOrder = !this.toggleOrder;
  }
  //Comparer Function    
  GetSortOrder(prop: any, orderby: boolean) {
    if (orderby) {
      return function (a: any, b: any) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      }
    } else {
      return function (a: any, b: any) {
        if (a[prop] > b[prop]) {
          return -1;
        } else if (a[prop] < b[prop]) {
          return 1;
        }
        return 0;
      }
    }

  }

  getKeysFromColumnHeader() {
    this.dataKeyArray = this.inputcolumns.map(x => x.dataKey)
  }
  onRowClick(data: any) {
    this.onRowSelect.emit(data);
  }

  ngAfterViewInit() {
    console.log("Tr data analysis");
  }

  editCellFlag: boolean = false;
  editCell(data: any, flagEdit: boolean) {
  }

  cellClicked(data:any){
  alert(data);
  }
  
  onScroll(e: any) {
    console.log(e.target.scrollLeft, e.target.scrollTop);
  }
}

