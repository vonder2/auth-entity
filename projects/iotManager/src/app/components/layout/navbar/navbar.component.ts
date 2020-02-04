import { Component } from '@angular/core';
import { ApiService } from '../../../shared/_services/api.service';
import { MessageService } from '../../../shared/_services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public isLogged = this.messageService.currentStatus;
  constructor(
    private apiService: ApiService,
    private messageService: MessageService
  ) {}

  logout() {
    this.apiService.logout();
    this.messageService.changeStatus({ status: false });
  }
}
