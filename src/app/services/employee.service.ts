import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';
import { AppConfig } from "../../app.config";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = "";
  constructor(private http: HttpClient) {
    this.apiUrl = AppConfig.apiUrl;
  }

  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Person/v1/GetPerson");
  }
  
  getAllPerson(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Person/v1/GetAllPerson");
  }

  getAllPersonWithPaging(currepage: number, pageSize: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + "Person/v1/GetAllPersonWithPaging", {
      params: {
        currentPage: currepage,
        pageSize: pageSize
      },
      observe: 'response'
    });
  }
}
