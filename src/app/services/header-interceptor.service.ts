import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor(private sessionService: SessionService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.sessionService.getUserToken();
    // let customHeaders: HttpHeaders = new HttpHeaders();
    // customHeaders = customHeaders.set('Content-Type', 'application/json; charset=utf-8');

    // let aheaders = new HttpHeaders();
    // aheaders = aheaders.set('h1', 'v1').set('h2', 'v2');

    const authReq = httpRequest.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + token
      })
    });
    console.log('Intercepted HTTP call', authReq);
    return next.handle(authReq);
  }

}
