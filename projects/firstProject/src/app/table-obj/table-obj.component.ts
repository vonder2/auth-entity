import {Component, EventEmitter, Input, OnInit, OnChanges, Output} from '@angular/core';
import {Person} from '../../assets/person';

@Component({
  selector: 'app-table-obj',
  templateUrl: './table-obj.component.html',
  styleUrls: ['./table-obj.component.css']
})
export class TableObjComponent implements OnInit, OnChanges {
  @Input() dataSource;
  @Output() rowOnClick = new EventEmitter();
  fieldNames;
  constructor() { }

  objects = [];
  ngOnInit() {

  }

  ngOnChanges() {
    for (const obj of this.dataSource) {
      this.objects.push(obj);
    }

    this.fieldNames = Object.keys(this.objects[0]);
  }

  // getFieldNames() {
  //   return Object.keys(this.objects[0]);
  // }

  clickHandler(index) {
    this.rowOnClick.emit(this.dataSource[index]);
    const table = document.querySelector('table');
    // table.rows.item(index + 1).classList.toggle('selected');
    for (let i = 0; i < table.rows.length; i++) {
      if (i === index) {
        table.rows.item(i + 1).classList.toggle('selected');
      } else       {
        table.rows.item(i + 1).classList.remove('selected');
      }

    }


  }




}
