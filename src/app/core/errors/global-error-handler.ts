import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../../shared/errors/error-dialog.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly errorDialogService: ErrorDialogService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err) => {
              console.log(err.status);
                switch (err.status) {
                    case 0:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    case 401:
                      this.errorDialogService.openDialog('Api error');
                        break;
                    case 422:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    case 429:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    case 403:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    case 404:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    case 500:
                        this.errorDialogService.openDialog('Api error');
                        break;
                    default:
                }
                return throwError(err);
            }),
        );
    }
}
