import { Injectable } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesCommonBoxService {

  subj = new ReplaySubject();
  subj2 = new Subject();

  constructor() { }

  getCityNames()
  {
    return this.subj.pipe(map((cityList: any) => {
      const cityNamesArr = [];
      // console.log('getCityNames map');
      for (const city of cityList) {
        cityNamesArr.push(city.name);
        // console.log(city);
      }
      return cityNamesArr;
    }));
  }


  getDataObj()
  {
    return this.subj.pipe(map((cityList: any) => {
      const dataObj = {};
      cityList.forEach((city) => {
        dataObj[city.name] = {
          url: city.urlImg,
          description: city.description
        };
      });
      console.log('citiinfo Dataobj: ', dataObj);
      return dataObj;
    }));
  }
}
