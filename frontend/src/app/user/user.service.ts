import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, EMPTY, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  baseUrl = 'http://localhost:3001/users';

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(userForm: any): Observable<User> {
    return this.http.post<User>(this.baseUrl, userForm).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string | null): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  handleError(e: any): Observable<any> {
    this.showMessage('As senhas devem ser iguais', true);
    return EMPTY;
  }
}
