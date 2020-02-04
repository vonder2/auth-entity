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


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BookComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialDesignModule
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
