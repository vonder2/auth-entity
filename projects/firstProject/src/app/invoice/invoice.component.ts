import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  // quantity = 1;
  quantity: number;
  // price = 0;
  price: number;

  ngOnInit() {
  }


  getTotal() {
    // return (+this.price) + (+this.quantity);
    return +this.price + +this.quantity;
  }
}
