import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpLoadingInterceptor} from './errors/http-loading.interceptor';
import {ErrorInterceptor} from './errors/global-error-handler';
import { ComponentBase } from './components/component-base.component';

@NgModule({
  declarations: [ComponentBase],
  imports: [],
  exports: [ComponentBase],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
