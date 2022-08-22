import { HeaderService } from '../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService
  ) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Início',
      icon: 'home',
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getIsLogged();
    console.log(this.isLoggedIn, 'home');
  }
}
