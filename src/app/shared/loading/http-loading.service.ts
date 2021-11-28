import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLoadingStateService {
  private httpRequest = new BehaviorSubject<any>(false);
  httpRequestOngoing = this.httpRequest.asObservable();

  private loading = false;

  nextState(update: boolean) {
    this.httpRequest.next(update);
    this.loading = update;
  }

  get httpRequestLoading() {
    return this.loading;
  }
}
