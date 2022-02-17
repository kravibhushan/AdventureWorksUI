import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { MenuToggleService } from './services/menu-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuState: boolean = true;
  subscription: Subscription;
  mainBodyStyle: string = "";

  constructor(private menuToggleService: MenuToggleService, private primengConfig: PrimeNGConfig) {
    // this.mainBodyStyle = "margin-left: 250px; ";
    this.subscription = this.menuToggleService.getToggleInfo().subscribe(message => {
      if (message) {
        this.mainBodyStyle = "margin-left: 250px; ";
      } else {
        this.mainBodyStyle = "margin-left: 70px; ";
      }
    });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


