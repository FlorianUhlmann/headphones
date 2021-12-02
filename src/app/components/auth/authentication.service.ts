import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { noop, Observable } from 'rxjs';
import { MapOperator } from 'rxjs/internal/operators/map';
import { map, tap } from 'rxjs/operators';
import { LoginDto } from 'src/app/core/model/LoginDto';
import { LoginToken } from 'src/app/core/model/LoginToken';
import { AuthCheckService } from 'src/app/shared/services/auth-check.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly url = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient,private authStore: AuthCheckService, private router:Router) { }

  login(data: any): Observable<LoginDto>{
    console.log(data);
   return  this.http.post(`${this.url}auth`, data)
      .pipe(
        tap((res:any) => console.log(res)),
        tap((res:LoginDto) => this.authStore.token.next( { authToken: res.authToken, authToken_exp: res.authToken_exp })),
        tap(() => console.log(this.authStore.token.value)),
      )
      

  }
  
  
  
}
