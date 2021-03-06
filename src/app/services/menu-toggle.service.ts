import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {

  constructor() { }
  private subject = new Subject<any>();
  private subjectToggle = new BehaviorSubject<boolean>(true);

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessages() {
    this.subject.next({});
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getToggleInfo(): Observable<boolean> {
    return this.subjectToggle.asObservable();
  }

  setToggleInfo(isMinimized: boolean) {
    this.subjectToggle.next(isMinimized);
  }
}
