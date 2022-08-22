import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { HeaderService } from 'src/app/template/header/header.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService
  ) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Usuário',
      icon: 'person',
    });
  }

  ngOnInit(): void {
    {
      this.isLoggedIn = this.authService.getIsLogged();
      console.log(this.isLoggedIn, 'userview');
    }
  }
}
