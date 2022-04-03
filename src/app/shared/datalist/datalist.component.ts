import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {
  @Input() listName: string = "";
  @Input() dataValues: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
