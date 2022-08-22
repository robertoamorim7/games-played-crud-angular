import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from './login.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;

  userId: number = {} as number;

  userIdSubject = new Subject<number>();

  baseUrl = 'http://localhost:3001/users';

  isLoggedIn = new Subject<boolean>();

  constructor(private router: Router, private http: HttpClient) {}

  setIsLoggedIn(user: UserLogin) {
    if (user.email === 'user@user' && user.senha === '1234') {
      this.isLogged = true;
      this.isLoggedIn.next(true);
      this.router.navigate(['']);
    } else {
      this.isLoggedIn.next(false);
    }
  }

  setIsLoggedOut() {
    this.isLogged = false;
    this.isLoggedIn.next(false);
    this.userIdSubject.next(0);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getIsLogged() {
    return this.isLogged;
  }

  getUserId() {
    return this.userId;
  }

  readByEmail(user: UserLogin) {
    this.http.get<any>(this.baseUrl).subscribe((res) => {
      const userV = res.find((a: any) => {
        return a.email === user.email && a.senha === user.senha;
      });
      console.log(userV);

      if (userV) {
        this.isLogged = true;
        this.isLoggedIn.next(true);
        this.userId = userV.id;
        this.userIdSubject.next(userV.id);
        this.router.navigate(['']);
      } else {
        this.isLoggedIn.next(false);
      }
    });
  }
}
/* 
showMenuEmitter = new Subject<boolean>()
 */

/* isLoggedEmitter() {
  const verify = this.isLoggedIn;
  this.showMenuEmitter.emit(verify);
  /* const verify = this.isLoggedIn;
  this.showMenuEmitterter.emit(verify); */

/* 
logout() {
  this.isLoggedIn = false;
  this.showMenuEmitter.emit(false);
} */
/* 
login(user: UserLogin) {
  if (user.email === 'user@user' && user.senha === '1234') {
    this.isLoggedIn = true;
    this.showMenuEmitter.emit(true);
    this.router.navigate(['']);
  } else {
    this.isLoggedIn = false;
    this.showMenuEmitter.emit(false);
  }
} */
