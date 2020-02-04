import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {FormsModule} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './person-table/table.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { TableObjComponent } from './table-obj/table-obj.component';
import {HttpClientModule} from '@angular/common/http';
import {APIService} from './Service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    SelectComponent,
    TableComponent,
    ExchangeComponent,
    TableObjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [APIService], // add service
  bootstrap: [AppComponent]
})
export class AppModule { }
