import { Component, OnInit } from '@angular/core';
import EmployeesJson from '../data/EmployeeData.json';

@Component({
  selector: 'app-testgrid',
  templateUrl: './testgrid.component.html',
  styleUrls: ['./testgrid.component.css']
})
export class TestgridComponent implements OnInit {
  columnsData: any[] = [];
  Employees: any[] = EmployeesJson;
  jsonData: any[] = [];
  constructor() {
    this.columnsData =
      [
        { header: "id", dataKey: "id", columDataType: "String" }
        , { header: "name", dataKey: "name", columDataType: "String" }
        , { header: "email", dataKey: "email", columDataType: "String" }
        , { header: "password", dataKey: "password", columDataType: "String" }
        , { header: "about", dataKey: "about", columDataType: "String" }
        , { header: "token", dataKey: "token", columDataType: "String" }
        , { header: "country", dataKey: "country", columDataType: "String" }
        , { header: "location", dataKey: "location", columDataType: "String" }
        , { header: "lng", dataKey: "lng", columDataType: "String" }
        , { header: "lat", dataKey: "lat", columDataType: "String" }
        , { header: "dob", dataKey: "dob", columDataType: "String" }
        , { header: "gender", dataKey: "gender", columDataType: "String" }
        , { header: "userType", dataKey: "userType", columDataType: "String" }
        , { header: "userStatus", dataKey: "userStatus", columDataType: "String" }
        , { header: "profilePicture", dataKey: "profilePicture", columDataType: "String" }
        , { header: "coverPicture", dataKey: "coverPicture", columDataType: "String" }
        , { header: "enablefollowme", dataKey: "enablefollowme", columDataType: "String" }
        , { header: "sendmenotifications", dataKey: "sendmenotifications", columDataType: "String" }
        , { header: "sendTextmessages", dataKey: "sendTextmessages", columDataType: "String" }
        , { header: "enabletagging", dataKey: "enabletagging", columDataType: "String" }
        , { header: "createdAt", dataKey: "createdAt", columDataType: "String" }
        , { header: "updatedAt", dataKey: "updatedAt", columDataType: "String" }
        , { header: "livelng", dataKey: "livelng", columDataType: "String" }
        , { header: "livelat", dataKey: "livelat", columDataType: "String" }
        , { header: "liveLocation", dataKey: "liveLocation", columDataType: "String" }
        , { header: "creditBalance", dataKey: "creditBalance", columDataType: "String" }
        , { header: "myCash", dataKey: "myCash", columDataType: "String" }
      ]
    this.jsonData = EmployeesJson;
  }

  ngOnInit(): void {
  }
  selectedData(e: any) {
    console.log(JSON.stringify(e));
  }
}
