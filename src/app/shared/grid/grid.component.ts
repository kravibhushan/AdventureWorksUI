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

  //   let script = this.renderer.createElement('script');
  //   script.type = `application/json`;
  //   script.text = `
  //   {
  //     $(function() {
  //       $("#upperDiv").scroll(function() {
  //           $("#mainDiv").scrollLeft($("#upperDiv").scrollLeft());
  //       });
  //       $("#mainDiv").scroll(function() {
  //           $("#upperDiv").scrollLeft($("#mainDiv").scrollLeft());
  //       });
  //   });
  //   }
  // `;
  //   this.renderer.appendChild(this._document.body, script);
  }

  loadData() {
    console.log(this.inputJsonData);
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
    console.log(this.dataKeyArray);
  }
  onRowClick(data: any) {
    this.onRowSelect.emit(data);
  }

  // @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    console.log(event);
    this.renderer.setStyle(this.upperDiv.nativeElement, 'width', this.mainDiv.nativeElement.offsetWidth);
    // this.renderer.setProperty(this.upperDiv.nativeElement, 'innerHTML', '<p>Hello World<p>');
  }



  ngAfterViewInit() {
    this.renderer.setStyle(this.upperDiv.nativeElement, 'width', this.mainDiv.nativeElement.offsetWidth);
  }
}

