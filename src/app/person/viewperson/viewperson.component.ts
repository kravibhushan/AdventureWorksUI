import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';



@Component({
  selector: 'app-viewperson',
  templateUrl: './viewperson.component.html',
  styleUrls: ['./viewperson.component.css']
})
export class ViewpersonComponent implements OnInit {

  columnsData: any[] = [];
  jsonData: any[] = [];
  responseData: any[] = [];
  gridRowData: any;
  currentPage: number = 0;
  TotalRecords: number = 0;

  constructor(private employeeServ: EmployeeService) {
    this.columnsData =
      [
        { header: 'Employee Id', dataKey: 'businessEntityId', sortable: true },
        { header: 'Title', dataKey: 'title', sortable: true },
        { header: 'First Name', dataKey: 'firstName', sortable: true },
        { header: 'Middle Name', dataKey: 'middleName', sortable: true },
        { header: 'Last Name', dataKey: 'lastName', sortable: true },
        { header: 'Email Promotion', dataKey: 'emailPromotion', sortable: true },
        { header: 'Phone Number', dataKey: 'phoneNumber', sortable: true },
        { header: 'Email', dataKey: 'emailAddress', sortable: true },
        { header: 'phoneNumberType', dataKey: 'phoneNumberType', sortable: true },

      ]
  }

  ngOnInit(): void {
    this.employeeServ.getAllPersonWithPaging(this.currentPage, 50).subscribe(data => {
      this.responseData = data.body.personInfoList;
      this.TotalRecords = data.body.totalRecords;
      this.jsonData = this.responseData;
    });
  }

  selectedData(e: any) {
    this.gridRowData = JSON.stringify(e);
  }

  handleScrollEvent(scrollPercentage: number) {
    if (Math.round(scrollPercentage) >= 70) {
      if (this.TotalRecords >= this.currentPage * 50) {
        this.currentPage = this.currentPage + 1;
        this.employeeServ.getAllPersonWithPaging(this.currentPage, 50).subscribe(data => {
          let localresponse = data.body.personInfoList
          localresponse.forEach((elemenet: any) => { this.jsonData.push(elemenet) });
          this.TotalRecords = data.body.totalRecords;
        });
      }
    }
  }
}
