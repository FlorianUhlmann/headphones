import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingDialogComponent} from './loading/loading-dialog/loading-dialog.component';
import {AngularMaterialModule} from './angular-material.module';
import {ErrorDialogComponent} from './errors/error-dialog/error-dialog.component';

@NgModule({
  declarations: [LoadingDialogComponent, ErrorDialogComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [LoadingDialogComponent]
})
export class SharedModule {}
