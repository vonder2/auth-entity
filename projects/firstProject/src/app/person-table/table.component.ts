import { Component, OnInit } from '@angular/core';
import {Person} from '../../assets/person.js';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  people = [];
  ngOnInit() {
    this.people.push(new Person('Vova', 35, 112, true));
    this.people.push(new Person('Masha', 44, 234.6, false));
    this.people.push(new Person('Pasha', 22, 123.1, true));
  }

  getFieldNames() {
    return Object.keys(this.people[0]);
  }
}
