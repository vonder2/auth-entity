import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataStoreService} from './dataStore.service';
import {PhoneBookURLs} from '../Classes/phoneBookURLs';
import {Contact} from '../Classes/contact';

@Injectable({
  providedIn: 'root'
})

// Phone Book service
export class ApplicationService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     // 'Content-Type': 'application/json'
  //   })
  // };

  constructor(private http: HttpClient) { }

  // getAllContacts(token: string) {
  getAllContacts() {
    // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
    // return this.http.get(PhoneBookURLs.urlContacts, this.httpOptions);

    // httpOptions added in PhoneBook Interceptor
    return this.http.get(PhoneBookURLs.urlContacts);
  }

  // addContact(contact, token: string) {
  addContact(contact: Contact) {
    // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
    // return this.http.post(PhoneBookURLs.urlContacts, contact, this.httpOptions);
    return this.http.post(PhoneBookURLs.urlContacts, contact);
  }


  // removeContact(id, token: string) {
  removeContact(id: number) {
    const url = `${PhoneBookURLs.urlContacts}/${id}`;
    // this.httpOptions.headers = this.httpOptions.headers.set('Authorization', token);
    // return this.http.delete(url, this.httpOptions);
    return this.http.delete(url);
  }

  editContact(contact: Contact) {
    return this.http.put(PhoneBookURLs.urlContacts, contact);
  }
}
