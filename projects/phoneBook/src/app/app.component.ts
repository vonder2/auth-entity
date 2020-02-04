import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBook';
  router = 'book';

  updateRouter(newRouter: string) {
    setTimeout(() => {
      this.router = newRouter;
    }, 10);

  }
}
