import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadData();
    this.getKeysFromColumnHeader();
  }

  loadData() {
    console.log(this.inputJsonData);
  }
  getKeysFromColumnHeader() {
    this.dataKeyArray = this.inputcolumns.map(x => x.dataKey)
    console.log(this.dataKeyArray);
  }
  onRowClick(data: any) {
    this.onRowSelect.emit(data);
  }
}

