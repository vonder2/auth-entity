import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/_services/api.service';
import { MessageService } from '../../shared/_services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public model: any = {};
  public loading = false;

  constructor(
    private apiService: ApiService,
    private messageservice: MessageService
  ) {}

  ngOnInit() {
    this.messageservice.changeStatus({ status: true });
  }
}
