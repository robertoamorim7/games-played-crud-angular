import { Component, Directive, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getIsLoggedIn().subscribe((shouldLogIn) => {
      this.showMenu = shouldLogIn;
      console.log(shouldLogIn);
    });
  }

  logout() {
    this.showMenu = false;
    this.authService.setIsLoggedOut();
    this.router.navigate(['login']);
  }
}
