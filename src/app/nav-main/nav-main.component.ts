import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuToggleService } from '../services/menu-toggle.service';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  menuState: boolean = true;
  messages: any[] = [];
  subscription: Subscription;

  constructor(private menuToggleService: MenuToggleService) {
    this.subscription = this.menuToggleService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuState = !this.menuState;
    this.menuToggleService.setToggleInfo(this.menuState);
  }
  ngOnDestroy() {

    this.subscription.unsubscribe();
  }
}

