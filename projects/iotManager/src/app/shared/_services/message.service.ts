import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
  data = { status: false };
  private logStatus = new BehaviorSubject(this.data.status);
  private messageSource = new BehaviorSubject('week');

  public currentStatus = this.logStatus.asObservable();
  public currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeStatus(status: any) {
    this.logStatus.next(status);
  }
}
