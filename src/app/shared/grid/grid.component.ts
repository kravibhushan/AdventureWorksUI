import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, Renderer2, Inject, Injectable, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewInit {

  dataListName: string = "";
  dataListvalues: any[] = [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Input("JsonData") inputJsonData: any[] = [];
  @Input("Columns") inputcolumns: any[] = [];

  @Output() onRowSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() scrollEvent: EventEmitter<number> = new EventEmitter<number>();

  dataKeyArray: string[] = [];
  filterData: any[] = [];
  totalrecord: number = 0;
  isAllChecked: boolean = false;
  gridData: any[] = [];

  constructor(private http: HttpClient, private renderer: Renderer2, private ElByClassName: ElementRef) {
    this.gridData = this.inputJsonData;
    this.totalrecord = this.inputJsonData.length;
  }

  ngOnInit(): void {
    this.loadData();
    this.getKeysFromColumnHeader();
    console.log(this.dataKeyArray);

  }
  ngAfterViewInit() {
    const checkBoxElement: any = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.rowChecked');
  }

  ngOnChanges(changes: SimpleChanges) {
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

  counter: number = 0;
  getIndividualDataKey(dataKey: any): any[] {
    console.log(this.counter);
    let localArrayMap: any[] = [];
    this.inputJsonData.forEach((x) => {
      return localArrayMap.push(x[dataKey]);
    });
    this.counter++;
    return localArrayMap;
  }

  onRowClick(data: any) {
    this.onRowSelect.emit(data);
  }



  editCellFlag: boolean = false;
  editCell(data: any, flagEdit: boolean) {
  }

  cellClicked(data: any) {
    alert(data);
  }

  onScroll(e: any) {
    var divMaxScroll = e.target.scrollHeight;
    var currentScroll = e.target.scrollTop + e.target.clientHeight;
    var scrolled = (currentScroll / divMaxScroll) * 100;
    this.scrollEvent.emit(scrolled);
  }


  checked(e: any) {
    if (e.target.checked) {
      this.isAllChecked = true;
    }
    else {
      this.isAllChecked = false;
    }
  }
}

