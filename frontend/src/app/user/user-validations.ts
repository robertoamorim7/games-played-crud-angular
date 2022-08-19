import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class UserValidations {
  static cepValidator(control: FormControl): any {
    const cep = control.value;
    const validCep = /^[0-9]{5}-[0-9]{3}$/;

    return cep && cep !== '' && validCep.test(cep)
      ? null
      : { cepInvalido: true };
  }

  static mustMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('senha');
    const confirmPassword = control.get('confirmarSenha');

    return password &&
      confirmPassword &&
      password.value != confirmPassword.value
      ? { mustMatch: true }
      : null;
  };
}
