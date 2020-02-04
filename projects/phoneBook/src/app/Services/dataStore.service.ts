import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
// import {Contact} from '../Classes/contact';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  dataSubject = new BehaviorSubject(null);
  // contactSubject = new BehaviorSubject(null);

  constructor() { }
}
