import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getCurrencyRates()
  {
    return this.http.get('https://api.exchangeratesapi.io/latest?symbols=USD,EUR,GBP,RUB,ILS&base=USD');
    // return this.http.get('https://api.exchangeratesapi.io/latest?symbols=USD,EUR,GBP,RUB,ILS');
  }
}
