import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { ComponentBase } from 'src/app/core/components/component-base.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends ComponentBase {

  source = timer(1000, 2000);
  
  ngOnInit(): void {
    // TODO DEMo can be removed if wanted
    this.subscription( this.source.subscribe(val => console.log(val)))
    
  }

}
