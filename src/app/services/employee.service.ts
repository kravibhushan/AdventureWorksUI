import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }
  
  gtAllEmployee(): Observable<any> {
    return this.http.get<any>("http://local.adventureworks.api/Person");
  }

}
