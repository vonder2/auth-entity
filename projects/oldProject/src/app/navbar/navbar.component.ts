import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CitiesCommonBoxService} from '../Services/cities-common-box.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() navClick = new EventEmitter();
  // @Input() citiesNames: any;

  citiesNames;

  constructor(private commonBox: CitiesCommonBoxService) { }

  ngOnInit() {
    const subscription = this.commonBox.getCityNames();

    subscription.subscribe((res) => {
      // console.log(res);
      this.citiesNames = res;
    });
  }

  navClickEvent(page: string) {
    this.navClick.emit(page);
  }

  handler(city)
  {
    this.commonBox.subj2.next(city);
  }
}
