import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthCheckService } from 'src/app/shared/services/auth-store.service';

@Injectable({providedIn: 'root'})
export class LazyAuthGuard implements CanLoad {
    constructor(private auth:AuthCheckService, private router: Router) { }


    canLoad(route: Route) {
        return this.auth.isLoggedIn$
            .pipe(map(
                    (isLoggedIn:boolean) => isLoggedIn || this.router.createUrlTree([''])
                ))
    }
}