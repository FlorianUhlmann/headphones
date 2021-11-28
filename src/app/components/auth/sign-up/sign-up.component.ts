import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormControlDirective, FormGroup, Validators} from '@angular/forms';
import {matFormFieldAnimations} from '@angular/material/form-field';
import {FormControllerDirective} from 'src/app/core/components/form-controller.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends FormControllerDirective<Login> implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
  }

  formInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  submit() {}

  User: any = ['Super Admin', 'Author', 'Reader'];
}

export interface Login {
  username: string;
  email: string;
  password: string;
}
