import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CitiesCommonBoxService} from '../Services/cities-common-box.service';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
})
export class CityInfoComponent implements OnInit, OnDestroy {

  @Input() listCity;
  dataObj = {loading: {url: 'abc', description: 'hello'}};
  subscription1;
  subscription2;
  cityNames;
  currentCity;

  constructor(private commonBox: CitiesCommonBoxService) { }

  ngOnInit() {

    // this.listCity.forEach((city) => {
    //   this.dataObj[city.name] = {
    //     url: city.urlImg,
    //     description: city.description
    //   };
    // });

    // data loader
    this.subscription1 = this.commonBox.getDataObj();
    this.subscription1.subscribe((obj) => this.dataObj = obj);

    // city selector
    this.subscription2 = this.commonBox.subj2;
    this.subscription2.subscribe((city) => {
      console.log(city);
      console.log('dataObj: ', this.dataObj);
      this.currentCity = city;
    });

    this.cityNames = Object.keys(this.dataObj);
    this.currentCity = this.cityNames[0];
  }

  ngOnDestroy()
  {
    // console.log('unsubscribed');
    // this.subscription.unsubscribe();
  }

}
