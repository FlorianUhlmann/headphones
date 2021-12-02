import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormControllerDirective } from 'src/app/core/components/form-controller.directive';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormControllerDirective<Login> {
  
  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });;
  
  constructor(private fb: FormBuilder, private api: AuthenticationService, private readonly router: Router) {
    super();
  }

  submit(): void {
    this.submitForm(this.api.login.bind(this.api)).subscribe((loginData) => {
      if (!!loginData){
          this.router.navigate(['home']);
      }
    })
  }

}

export interface Login{
  username: string,
  password: string
}