import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../Services/chat.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {
  @Input() name;
  @ViewChild('inputID', {static: false}) inputElement; // template reference
  msg = '';

  constructor(private chat: ChatService) { }

  ngOnInit() {
  }

  getChat() {
    return this.chat.getChat();
  }

  sendMessage() {
    if (this.msg !== '' && this.msg !== ' ')
        this.chat.addMessage(this.name.toUpperCase() + ': ' + this.msg);

    this.msg = '';
    this.inputElement.nativeElement.focus();
  }

  submitFunc(event: KeyboardEvent) {
    if (event.key !== 'Enter') return;
    this.sendMessage();
    event.preventDefault(); // No need to `return false;`.
  }
}
