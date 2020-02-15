import { Component, OnInit } from '@angular/core';
import {PersonCommonBoxService} from '../Services/person-common-box.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  localPersons: unknown = [];
  localKeys = Object.keys(this.localPersons);
  firstLine = true;
  constructor(private commonBoxService: PersonCommonBoxService) { }

  ngOnInit() {
    // ready for async
    this.localPersons = this.commonBoxService.getSubj();
    // this.commonBoxService.getSubj().subscribe(res => {
    //   this.localPersons = res;
    // });
  }

}
