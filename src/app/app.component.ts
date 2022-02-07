import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rowData: any;
  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.rowData = this.http.get("https://localhost:7291/Person");
  }

  title = 'AdventureWorksUI';

  columnDefs = [
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
