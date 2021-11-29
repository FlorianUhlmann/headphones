import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpLoadingInterceptor} from './errors/http-loading.interceptor';
import {GlobalErrorHandler} from './errors/global-error-handler';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
