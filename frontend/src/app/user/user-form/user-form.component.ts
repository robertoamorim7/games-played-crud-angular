import { Router } from '@angular/router';
import { UserValidations } from './../user-validations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
/* import { CepValidator } from '../user-validations'; */

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = {} as User;
  userForm: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group(
      {
        name: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
        cep: [null, [Validators.required, UserValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        senha: [null, Validators.required],
        confirmarSenha: [null, Validators.required],
      },
      { validators: UserValidations.mustMatch }
    );
  }

  onSubmit(): void {
    this.user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      cep: this.userForm.value.cep,
      numero: this.userForm.value.numero,
      complemento: this.userForm.value.complemento,
      rua: this.userForm.value.rua,
      bairro: this.userForm.value.bairro,
      cidade: this.userForm.value.cidade,
      estado: this.userForm.value.estado,
      senha: this.userForm.value.senha,
      confirmarSenha: this.userForm.value.confirmarSenha,
    };
    this.userService.create(this.user).subscribe((res) => {
      //this.userForm.reset();
      this.userService.showMessage('Usuário cadastrado com sucesso');
      this.router.navigate(['games']);
    });
  }
}
