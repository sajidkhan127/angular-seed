import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthLayoutComponent } from './auth.component';

@NgModule({
  declarations: [AuthLayoutComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
