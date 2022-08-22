import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UserLogin } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = {} as UserLogin;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.readByEmail(this.user);
  }
}
