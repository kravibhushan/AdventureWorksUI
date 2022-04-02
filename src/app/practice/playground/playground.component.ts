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
    if ((e.target.scrollHeight - e.target.scrollTop) == 150) {
      
    }
  }
}
