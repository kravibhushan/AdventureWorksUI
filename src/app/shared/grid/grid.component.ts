import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import EmployeesJson from '../data/EmployeeData.json';
import { Employee } from './models/employee';

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

