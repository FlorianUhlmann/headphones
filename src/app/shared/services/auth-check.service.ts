
import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginToken } from 'src/app/core/model/LoginToken';

@Injectable({providedIn: 'root'})
export class AuthCheckService {
  
  private initToken:LoginToken = {
    "authToken": '',
    "authToken_exp": 0
  }

  token: BehaviorSubject<LoginToken> = new BehaviorSubject<LoginToken>(this.initToken);
  token$: Observable<LoginToken> = this.token.asObservable();
  
  isLoggedIn$: Observable<boolean> = this.token$.pipe(map((toke) => !!toke ));
  redirectUrl!: string;

  constructor() { }

}