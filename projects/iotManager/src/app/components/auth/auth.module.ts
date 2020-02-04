import { AuthRoutingModule } from '../../components/auth/auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/auth/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/_modules/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, SharedModule, AuthRoutingModule],
  exports: [RouterModule],
})
export class AuthModule {}
