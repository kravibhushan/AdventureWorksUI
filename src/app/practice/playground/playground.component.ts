import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onScroll(e: any) {
    // console.log(e.target.scrollHeight);
    // console.log(e.target.scrollWidth);
    // console.log(e.target.scrollTop);
    if ((e.target.scrollHeight - e.target.scrollTop) == 150) {
      console.log("Half reached");
    }

  }

}
