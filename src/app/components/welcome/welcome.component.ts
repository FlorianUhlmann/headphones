import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ComponentBase } from 'src/app/core/components/component-base.directive';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends ComponentBase implements OnInit, OnDestroy {

  timer1: Observable<any> = timer(0, 1000);

  source = timer(1000, 2000);
  constructor() {
    super();
  }
  
  ngOnInit(): void {
    super.ngOnInit();
    this.subscription(this.source.subscribe(val => console.log(val)));
    
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
