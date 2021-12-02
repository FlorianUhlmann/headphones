import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthCheckService } from 'src/app/shared/services/auth-check.service';

@Injectable({providedIn: 'root'})
export class LazyAuthGuard implements CanActivate {
    constructor(private auth:AuthCheckService, private router: Router) { }


    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.auth.isLoggedIn$
            .pipe(map(
                    (isLoggedIn:boolean) => isLoggedIn || this.router.createUrlTree([''])
                ))
    }
}