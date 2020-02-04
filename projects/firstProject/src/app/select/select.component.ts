import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnChanges {
  @Input() array;
  @Output() selectChanged = new EventEmitter();
  private val: string;

  constructor() { }

  ngOnChanges() {
    if (this.array)    {
      this.val = this.array[0];
    }
  }

  changeHandler() {
    this.selectChanged.emit(this.val);
  }
}
