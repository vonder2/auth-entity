import { Component, OnInit } from '@angular/core';
import {APIService} from '../Service/api.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  // rates = ['USD'];
  rates: object;

  quantity = 1;
  price = 1;

  currencyFrom: string;
  currencyTo: string;
  currenciesList = [];

  constructor(private api: APIService) { }

  ngOnInit() {
      this.api.getCurrencyRates().subscribe((res: any) => {
        // this.rates = Object.assign({[res.base]: 1}, res.rates); // add base currency to list start
        this.rates = res.rates;
        this.currenciesList = Object.keys(this.rates).sort();
        this.currencyFrom = this.currenciesList[0];
        this.currencyTo = this.currenciesList[0];
        // console.table(res.rates);
      });
  }


  getTotal() {
    if (this.rates)
    {
      const total = this.price * this.quantity * this.rates[this.currencyTo] / this.rates[this.currencyFrom];
      return total.toFixed(2);
    }
    else  return 'Loading...';
  }

  // getCurrenciesList() {
  //   return Object.keys(this.rates).sort();
  // }

  setCurrencyFrom(curr) {
    this.currencyFrom = curr;
  }
  setCurrencyTo(curr) {
    this.currencyTo = curr;
  }
}
