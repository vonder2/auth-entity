import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-material',
  templateUrl: './auth-material.component.html',
  styleUrls: ['./auth-material.component.css']
})
export class AuthMaterialComponent implements OnInit {
  loginFC = new FormControl();
  passwFC = new FormControl();
  hide = true;



  secret = {
    sasha: 12345
  };

  authFG = new FormGroup({
    login: this.loginFC,
    password: this.passwFC
  });

  constructor(private mySnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAuth()
  {
    const login = this.authFG.value.login;
    const psw = this.authFG.value.password;
    console.log(login && this.secret[login] === psw ? 'OK' : 'Fail');
  }



  openSnackBar(message: string, action: string) {
    this.mySnackBar.open(message, action, {  duration: 2000  });
  }

}
