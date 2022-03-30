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
  gridRowData: any;

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
    this.employeeServ.getAllPerson().subscribe(data => {
      this.jsonData = data;
    });
  }

  selectedData(e: any) {
    this.gridRowData = JSON.stringify(e);
  }

}
