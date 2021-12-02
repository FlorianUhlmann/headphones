import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorDemoComponent } from './error-demo.component';

const routes: Routes = [{ path: '', component: ErrorDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorDemoRoutingModule { }
