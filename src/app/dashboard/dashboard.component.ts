import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardData: Dashboard = new Dashboard();

  constructor(private dashboardServ: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardServ.getDashboardData().subscribe((resp) => {
      this.dashboardData = resp;
      console.log(this.dashboardData);
    });
  }
}
