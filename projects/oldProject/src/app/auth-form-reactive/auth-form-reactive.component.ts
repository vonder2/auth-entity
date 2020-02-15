import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth-form-reactive',
  templateUrl: './auth-form-reactive.component.html',
  styleUrls: ['./auth-form-reactive.component.css']
})
export class AuthFormReactiveComponent implements OnInit {

  logPass = {
    login: new FormControl('myLogin', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(2) ]),
    hello: new FormControl('initial value'),
  };

  auth = new FormGroup(this.logPass);


  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.auth.value);
    console.log(this.auth.status);
  }
}
