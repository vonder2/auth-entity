import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../Services/auth.service';
import {ApplicationService} from '../../Services/application.service';
import {DataStoreService} from '../../Services/dataStore.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Patterns} from '../../Classes/patterns';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  @Output() outputVar = new EventEmitter();
  hidePassword = true;
  isLoading = false;

  authObservable: Observable<any>;
  registerObservable: Observable<any>;

  loginFC = new FormControl('ievgen1@gmail.com', [Validators.required, Patterns.emailPattern]);
  passwordFC = new FormControl('Password123$', [Validators.required, Patterns.passwordPattern]);

  authFG: FormGroup = new FormGroup({
    email: this.loginFC,
    password: this.passwordFC
  });


  constructor(
              private authService: AuthService, // return Observable
              private appService: ApplicationService,
              private data: DataStoreService
              ) { }

  sendAuthInfo(mode)
  {
    this.isLoading = true;

    if (mode === 'signIn')
      this.authObservable = this.authService.authenticate(this.authFG.value);
    else
      this.authObservable = this.authService.register(this.authFG.value);

    // subscribe (wait) for authentication
    this.authObservable.subscribe(
        (res) => { // success
          window.sessionStorage.setItem('phoneBookToken', res.token); // write token to session cookie

          console.log('Access allowed');
          // this.isLoading = false;
          this.outputVar.emit('book');
        },
        (err) => {
          console.log(err.error.message);
          this.isLoading = false;
        }
    );
  }
}
