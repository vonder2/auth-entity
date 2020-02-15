import { Component, OnInit } from '@angular/core';
import {Person} from '../assets/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = ['Vova', 'Masha', 'Misha', 'Nastia', 'Kirill'];
  color = ['red', 'green', 'blue', 'Yellow', 'White'];
  addresses = {
    USA : ['New York', 'Dallas', 'Boston'],
    France: ['Paris', 'Paris2'],
    Germany: ['Berlin', 'Hamburg'],
    Israel: ['Jerusalem', 'Haifa', 'Kiryat Yam']
  };
  countries = Object.keys(this.addresses);
  country = 'Select';

  city = 'Country';
  cities = Object.values(this.addresses);

  people = [];
  person = 'Select person';


  ngOnInit() {
    this.people.push(new Person('Vova', 35, 112, true));
    this.people.push(new Person('Masha', 44, 234.6, false));
    this.people.push(new Person('Pasha', 26, 123.1, true));
    this.people.push(new Person('Kasha', 21, 168.5, true));
    this.people.push(new Person('Nina', 25, 175.1, false));
  }

  setCountry(country: any) {
    this.country = country;
  }

  setCity(city) {
    this.city = city;
  }

  setObject(obj) {
    this.person = obj;
  }
}
