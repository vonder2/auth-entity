import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(color) {
    // this.router.navigateByUrl(color).then(() => alert('red'));
    this.router.navigate([color]);
  }
}
