import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/_modules/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FormsModule, SharedModule, DashboardRoutingModule],
  exports: [RouterModule],
})
export class DashboardModule {}
