import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { LoginResponse } from '../_models/user';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MessageService } from './message.service';

interface LoginEnterData {
  subdomain: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // API path
  basePath = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient,
    private messageservice: MessageService
  ) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    const userData = {
      user_name: localStorage.getItem('name'),
      default_currency: localStorage.getItem('currency'),
    };

    return userData;
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Verify user credentials on server to get token
  loginForm(data: LoginEnterData): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'login', data, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // After login save token and other values(if any) in localStorage
  setUser(resp: LoginResponse) {
    const date = new Date();
    localStorage.setItem('name', resp.user_name);
    localStorage.setItem('expires', date.toString());
    localStorage.setItem('token', resp.token);

    this.messageservice.changeStatus(true);
    this.router.navigate(['/dashboard']);
  }

  // Checking if token is set
  isLoggedIn() {
    const currentDate: Date = new Date();
    const localstorageDate: Date = new Date(localStorage.getItem('expires'));
    const hoursDiff = +(
      (currentDate.valueOf() - localstorageDate.valueOf()) /
      1000 /
      60
    ).toFixed(0);

    if (localStorage.getItem('token') !== null) {
      if (hoursDiff < 12 * 60) {
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    }
    return false;
  }

  // After clearing localStorage redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getSalesSummary(daterange: {}): Observable<any> {
    return this.http
      .post<any>(
        this.basePath + 'report/sales/summary',
        daterange,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
}
