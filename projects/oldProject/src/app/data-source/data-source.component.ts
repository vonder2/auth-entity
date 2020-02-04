import { Component, OnInit } from '@angular/core';
import { people } from '../../assets/people';
import {PersonCommonBoxService} from '../Services/person-common-box.service';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css']
})
export class DataSourceComponent implements OnInit {

  constructor(private commonBox: PersonCommonBoxService) { }

  ngOnInit() {
    this.commonBox.getSubj().next(people);
  }

}
