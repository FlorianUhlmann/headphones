import {Component, Directive, OnDestroy, OnInit} from '@angular/core';
import {Subscription, Unsubscribable} from 'rxjs';

@Component({  template: ''  })
export  class ComponentBase implements OnDestroy, OnInit {
  private subscriptions$ = new Subscription();

  subscription(observable: Unsubscribable) {
    this.subscriptions$.add(observable);
  }

  ngOnInit(): void {
    console.log('Something')
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }
}
