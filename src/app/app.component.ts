import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomValidations} from './shared/validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
  }
// ^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$
  /** To make easier, have reference to username and use in code.
   * Replace all instances of registrationForm.get('userName') wih just username.
   */
  get userName() {
    return this.registrationForm.get('userName');
  }

  /**
   * Custom validator "UsernameValidator"
   */
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4), CustomValidations.userNameValidator, CustomValidations.factoryFunctionPatternMatch(/password/)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Joshua'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     zip: new FormControl()
  //   }),
  // });
}
