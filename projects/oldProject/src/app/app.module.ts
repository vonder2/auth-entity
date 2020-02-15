import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrotherComponent } from './brother/brother.component';

import { ViewEncapsulationChildComponent } from './view-encapsulation-child/view-encapsulation-child.component';
import { ViewEncapsulationParentComponent } from './view-encapsulation-parent/view-encapsulation-parent.component';
import { PipochkaComponent } from './sliding-panel/pipochka.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { MySelectComponent } from './my-select/my-select.component';
import { KeyValuePipePipe } from './Pipes/key-value-pipe.pipe';
import { PeopleComponent } from './people/people.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthFormReactiveComponent } from './auth-form-reactive/auth-form-reactive.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { ColorHomeComponent } from './color-home/color-home.component';
import { RoutingModule} from './Modules/routing/routing.module';
import {RouterModule} from '@angular/router';
import { YellowComponent } from './yellow/yellow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthMaterialComponent } from './auth-material/auth-material.component';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        BrotherComponent,
        ViewEncapsulationChildComponent,
        ViewEncapsulationParentComponent,
        PipochkaComponent,
        NgIfComponent,
        NavbarComponent,
        CityInfoComponent,
        MySelectComponent,
        KeyValuePipePipe,
        PeopleComponent,
        DataSourceComponent,
        AuthFormComponent,
        AuthFormReactiveComponent,
        RedComponent,
        GreenComponent,
        BlueComponent,
        ColorHomeComponent,
        YellowComponent,
        AuthMaterialComponent
    ],
    imports: [
        BrowserModule,

        ReactiveFormsModule,
        RoutingModule,
        RouterModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
    ],
    providers: [],
    exports: [
        KeyValuePipePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
