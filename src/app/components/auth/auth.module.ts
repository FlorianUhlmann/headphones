import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthRoutingModule} from './auth-routing.module';
import {AngularMaterialModule} from '../../shared/angular-material.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, AuthRoutingModule, ReactiveFormsModule]
})
export class AuthModule {}
