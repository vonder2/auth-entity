import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhoneBookURLs} from '../Classes/phoneBookURLs';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(authObj): Observable<object> {
    return this.http.post(PhoneBookURLs.urlLogin, authObj);
  }

  register(authObj) {
    return this.http.post(PhoneBookURLs.urlRegister, authObj);
  }
}
