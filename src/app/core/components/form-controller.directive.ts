import {Directive, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {ComponentBase} from './component-base.directive';

@Directive()
export abstract class FormControllerDirective<T> extends ComponentBase {
  abstract form: FormGroup;
  abstract submit(): any;
  abstract formInit(): void;

  formSubmitted = new EventEmitter<T>();
  submitForm$: Subject<T> = new ReplaySubject<T>();
  apiResponse!: any;

  public constructor() {
    super();
  }

  get modelFormData(): T {
    const formData = new FormData();
    Object.keys(this.form).forEach(key => {
      formData.append(`${key}`, this.form.get(`${key}`)?.value);
      // following line ERR why?
      // formData.append(`${key}`, this.form[key]) ;
    });
    return formData as unknown as T;
  }

  get modelJson(): T {
    return this.form.getRawValue() as T;
  }

  get responseData() {
    return this.apiResponse;
  }

  resetForm() {
    this.form.reset();
    this.form.markAsPristine();
  }

  submitForm() {
    if (this.form.valid) {
      this.submitForm$.next(this.form.getRawValue() as T);
      this.formSubmitted.emit(this.form.getRawValue());
      this.submit();
    }
  }

  sendData(data: any, serviceCall: (data: any) => Observable<any>) {
    serviceCall(data).subscribe((res: any) => (this.apiResponse = res));
  }
}
