import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularMaterialModule} from 'src/app/shared/angular-material.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AngularMaterialModule]
})
export class HomeModule {}
