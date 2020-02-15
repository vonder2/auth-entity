import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements OnInit {

  @Input() options;
  @Output() optionSelected = new EventEmitter();
  val;
  constructor() { }

  ngOnInit() {
    this.val = 'Select city';
  }

  valueChanged() {
    // console.log('selected value', this.val);
    this.optionSelected.emit(this.val);
  }
}
