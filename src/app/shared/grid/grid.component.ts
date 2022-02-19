import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeesJson from '../data/EmployeeData.json';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  Employees: Employee[] = EmployeesJson;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    console.log(this.Employees);
  }

}

export class Employee {
  id: any | undefined;
  name: any | undefined;
  email: any | undefined;
  password: any | undefined;
  about: any | undefined;
  token: any | undefined;
  country: any | undefined;
  location: any | undefined;
  lng: any | undefined;
  lat: any | undefined;
  dob: any | undefined;
  gender: any | undefined;
  userType: any | undefined;
  userStatus: any | undefined;
  profilePicture: any | undefined;
  coverPicture: any | undefined;
  enablefollowme: any | undefined;
  sendmenotifications: any | undefined;
  sendTextmessages: any | undefined;
  enabletagging: any | undefined;
  createdAt: any | undefined;
  updatedAt: any | undefined;
  livelng: any | undefined;
  livelat: any | undefined;
  liveLocation: any | undefined;
  creditBalance: any | undefined;
  myCash: any | undefined;
}
