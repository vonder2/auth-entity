import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RedComponent} from '../../red/red.component';
import {BlueComponent} from '../../blue/blue.component';
import {GreenComponent} from '../../green/green.component';
import {ColorHomeComponent} from '../../color-home/color-home.component';
import {YellowComponent} from '../../yellow/yellow.component';

const appRoutes: Routes =
  [
    {path: '',  component: ColorHomeComponent},
    {path: 'red',  component: RedComponent,
      children: [
        {path: 'yellow',  component: YellowComponent},
      ]
    },
    {path: 'green',  component: GreenComponent, data: {title: 'Link to green'}  },
    {path: 'blue',  component: BlueComponent},
    {path: '**', redirectTo: ''}
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // important add
    RouterModule.forRoot(appRoutes)
  ]
})
export class RoutingModule { }
