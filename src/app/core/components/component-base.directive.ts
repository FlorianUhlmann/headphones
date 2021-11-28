import {Directive, OnDestroy} from '@angular/core';
import {Subscription, Unsubscribable} from 'rxjs';

@Directive()
export abstract class ComponentBase implements OnDestroy {
  private subscriptions$ = new Subscription();

  protected set subscription(observable: Unsubscribable) {
    this.subscriptions$.add(observable);
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
