import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './Components/auth/auth.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from './Components/book/book.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import {PhoneBookInterceptor} from './Classes/phone-book-interceptor';
import { MaterialDesignModule } from './Modules/material-design.module';
import { TableComponent } from './Components/table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LikeDislikeComponent } from './Components/like-dislike/like-dislike.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BookComponent,
    EditFormComponent,
    NavbarComponent,
    DashboardComponent,
    LikeDislikeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  entryComponents: [
    EditFormComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PhoneBookInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
