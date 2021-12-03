
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginToken } from 'src/app/core/model/LoginToken';

@Injectable({providedIn: 'root'})
export class AuthCheckService {
  
  token: BehaviorSubject<LoginToken | null> = new BehaviorSubject<LoginToken | null>(null);
  token$: Observable<LoginToken | null> = this.token.asObservable();
  
  isLoggedIn$: Observable<boolean> = this.token$.pipe(map((toke) => !!toke ));
  redirectUrl!: string;

  constructor() { }

}