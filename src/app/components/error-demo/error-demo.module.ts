import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorDemoRoutingModule } from './error-demo-routing.module';
import { ErrorDemoComponent } from './error-demo.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ErrorDemoComponent
  ],
  imports: [
    CommonModule,
    ErrorDemoRoutingModule,
    MatIconModule
  ]
})
export class ErrorDemoModule { }
