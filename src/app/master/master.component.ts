import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public dashboardData: Dashboard = new Dashboard();
  public testCount: number = 100;

  constructor(private dashboardServ: DashboardService) {
    this.testCount = 500;
  }

  ngOnInit(): void {
    this.dashboardServ.getDashboardData().subscribe((resp) => {
      this.dashboardData = resp;
      console.log(this.dashboardData);
    });
  }

}
