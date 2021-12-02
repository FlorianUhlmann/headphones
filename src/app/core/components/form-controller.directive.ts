import {Directive, EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {ComponentBase} from './component-base.directive';

@Directive()
export abstract class FormControllerDirective<T> extends ComponentBase {
  abstract form: FormGroup;

  submitForm$: Subject<T> = new ReplaySubject<T>();
  apiResponse!: any;

  public constructor() {
    super();
  }

  
  get modelJson(): T {
    return this.form.getRawValue() as T;
  }
  
  modelFormData(data: any): FormData {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(`${key}`, data[`${key}`]);
    });
    return formData;
  }

  resetForm() {
    this.form.reset();
    this.form.markAsPristine();
  }

  submitForm(serviceCall: (data: any) => Observable<any>): Observable<any> {
    if (this.form.valid) {
      this.form.value;
      return this.sendData(this.form.value, serviceCall);
    }
    return of(null);
  }

  sendData(data: any, serviceCall: (data: any) => Observable<any>): Observable<any> {
    return serviceCall(data)
  }
}
