import {AbstractControl, ValidatorFn} from '@angular/forms';


export class CustomValidations {

  static userNameValidator(control: AbstractControl) {
    if (!control || !control.value) {
      return null;
    } else {
      if (control.value.match('admin')) {
        return {'invalidUserName': true};
      } else {
        return null;
      }
    }
  }

  /**
   * Factory Function allows the use of passing values down.
   * Reusability is key.
   * @param pattern
   */
  static factoryFunctionPatternMatch(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl) => {
      const forbiddenPattern = pattern.test(control.value);
      return forbiddenPattern ? {'forbiddenPattern': true} : null;
    };

  }
}

