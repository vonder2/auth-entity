import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonCommonBoxService {

  // private subj = new BehaviorSubject(null); // stores last value for new subscribers
  private subj = new ReplaySubject(2); // stores last n values for new subscribers
  // private subj = new Subject();
  getSubj()
  {
    return this.subj;
  }
  constructor() { }
}
