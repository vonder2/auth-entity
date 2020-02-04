import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-parent',
  templateUrl: './view-encapsulation-parent.component.html',
  styleUrls: ['./view-encapsulation-parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewEncapsulationParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
