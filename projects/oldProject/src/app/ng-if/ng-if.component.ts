import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }
  flag = true;
  greenText = 'red square is here';

  ngOnInit() {
  }

  buttonClick() {
    this.flag = !this.flag;
    this.greenText = 'red square was removed!';
  }
}
