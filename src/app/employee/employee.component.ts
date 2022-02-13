import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public gridApi: any;
  public gridColumnApi: any;
  public columnDefs;
  public peopleCount: number = 0;

  title = 'Employee List';

  rowData: any;
  constructor(private employeeServ: EmployeeService) {
    this.columnDefs = [
      { headerName: 'Employee Id', field: 'businessEntityId', sortable: true },
      { headerName: 'Title', field: 'title', sortable: true },
      { headerName: 'First Name', field: 'firstName', sortable: true },
      { headerName: 'Middle Name', field: 'middleName', sortable: true },
      { headerName: 'Last Name', field: 'lastName', sortable: true },
      { headerName: 'Job Title', field: 'jobTitle', sortable: true },
      { headerName: 'Phone Number', field: 'phoneNumber', sortable: true },
      { headerName: 'Email', field: 'emailAddress', sortable: true },
      { headerName: 'Postal Code', field: 'postalCode', sortable: true },
      { headerName: 'City', field: 'city', sortable: true },
      { headerName: 'Country', field: 'countryRegionName', sortable: true }
    ];

  }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.ColumnApi;
    this.employeeServ.gtAllEmployee().subscribe(data => {
      this.peopleCount = (data as any[]).length;
      params.api.setRowData(data);
    });
  }
}
