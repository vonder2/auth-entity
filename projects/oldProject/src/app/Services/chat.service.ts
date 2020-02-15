import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chat = [];
  constructor() { }

  addMessage(msg) {
    this.chat.push(msg);
  }

  getChat() {
    return this.chat;
  }
}
