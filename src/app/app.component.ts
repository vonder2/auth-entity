import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBook';
  router = 'book';
  header = ['firstName', 'lastName'];
  data = [{firstName: 'Sasha', lastName: 'Sominsky'}, {firstName: 'Masha', lastName: 'Ivanova'}];

  updateRouter(newRouter: string) {
    setTimeout(() => {
      this.router = newRouter;
    }, 10);

  }
}
