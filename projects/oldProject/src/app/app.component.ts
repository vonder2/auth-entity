import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {listCity} from '../assets/data/citiesInfo';
import {CitiesCommonBoxService} from './Services/cities-common-box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  page: string;
  title = 'oldProject';

  cityNamesArr = [];
  endValue = 3;

  obj = {
    sasha: 62,
    masha: 50,
    pasha: 75,
    glasha: 30
  };


  // cities = listCity;
  // city: string;

  constructor(private commonBox: CitiesCommonBoxService)
  {
    this.commonBox.subj.next(listCity); // send to subject
    this.cityNamesArr = listCity.map(city => city.name);
  }



}
