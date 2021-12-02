import {HttpHandler, HttpRequest, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {LoadingDialogService} from 'src/app/shared/loading/loading-dialog.service';
import {HttpLoadingStateService} from 'src/app/shared/loading/http-loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
  private httpRequest = new BehaviorSubject<boolean>(false);
  httpRequestOngoing = this.httpRequest.asObservable();

  constructor(
    private loadingDialogService: LoadingDialogService,
    private httpLoadingService: HttpLoadingStateService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.httpLoadingService.nextState(true);
    this.loadingDialogService.openDialog();
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingDialogService.hideDialog();
        this.httpLoadingService.nextState(false);
      }),
    ) as Observable<HttpEvent<any>>;
  }
}
