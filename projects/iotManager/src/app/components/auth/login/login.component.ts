import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: any = {};
  public err: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  login() {
    this.model.subdomain = 'externaldemo';
    this.apiService.loginForm(this.model).subscribe(
      response => {
        if (response) {
          this.apiService.setUser(response);
        }
      },
      error => {
        this.err = error.toString();
        setTimeout(() => (this.err = null), 3000);
        console.error(error);
      }
    );
  }
}
