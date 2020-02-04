import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipochka',
  templateUrl: './pipochka.component.html',
  styleUrls: ['./pipochka.component.css']
})
export class PipochkaComponent implements OnInit {
  content: any;
  closedValue = true;
  panelWidth = '20vw';
  panelStyle = {width: this.panelWidth,
                left: '-' + this.panelWidth};
  pipochkaStyle = {left: this.panelWidth};


  constructor() { }

  ngOnInit() {
    this.content = 'Sliding panel content';
  }

  pipochkaClicked() {
    this.closedValue = !this.closedValue;
    if (this.closedValue)
    {
      this.panelStyle.left = '-' + this.panelWidth;
    }
    else
    {
      this.panelStyle.left = '0';
    }

  }
}
