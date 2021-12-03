import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthCheckService } from 'src/app/shared/services/auth-store.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth:AuthCheckService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.isLoggedIn$
            .pipe(map(
                    isLoggedIn => isLoggedIn || this.router.createUrlTree([''])
                ))
    }
}