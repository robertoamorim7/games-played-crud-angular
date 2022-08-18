import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

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
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
    });
    console.log(this.userForm);
  }

  onSubmit(): void {
    this.user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
    };
    this.userService.create(this.user).subscribe((res) => {
      this.userForm.reset();
    });
  }
}

/* address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        cep: [''],
      }), */
