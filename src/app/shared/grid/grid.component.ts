import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, Renderer2, Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild("upperDiv") upperDiv: ElementRef;
  @ViewChild("mainDiv") mainDiv: ElementRef;

  @ViewChild("thData") private thData: ElementRef<HTMLElement>;
  @ViewChild("tbody") tbody: ElementRef<HTMLElement>;

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

  // @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    this.renderer.setStyle(this.upperDiv.nativeElement, 'width', this.mainDiv.nativeElement.offsetWidth);
  }



  ngAfterViewInit() {
    console.log("Tr data analysis");
    this.getChildren();
    // this.renderer.setStyle(this.upperDiv.nativeElement, 'width', this.mainDiv.nativeElement.offsetWidth);
  }

  editCellFlag: boolean = false;
  editCell(data: any, flagEdit: boolean) {
    // this.editCellFlag = true;
  }


  @HostListener('window:resize', [])
  onResize() {
    this.setDivHeight();
  }

  ngAfterViewChecked() {
    this.setDivHeight();
  }

  setDivHeight() {
    console.log(this.thData);
    // let height = `${this.tr.nativeElement.offsetHeight}px`;
    // this.renderer.setStyle(this.th.nativeElement, 'height', height);
  }



  public getChildren() {

    const tbodyElement = this.tbody.nativeElement;
    const firstTrChild = tbodyElement.children;
    const td = firstTrChild[0].querySelector("td");
    console.log(firstTrChild);
    console.log(td);
    
    console.log('-------------');
    const parentElement = this.thData.nativeElement;
    const firstChild = parentElement.children;
    const thead = parentElement.querySelector("thead");
    console.log(firstChild);
    console.log(thead);
  }
}

