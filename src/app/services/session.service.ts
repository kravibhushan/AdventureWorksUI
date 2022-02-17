import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  
  getUserToken(): string | undefined {
    let userToken: string | undefined = sessionStorage.getItem('userToken')?.toString();
    return userToken;
  }
}
