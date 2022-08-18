import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3001/users';

  /*  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  } */

  create(userForm: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, userForm);
  }

  /*  read(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  readById(id: string | null): Observable<Game> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  update(game: Game): Observable<Game> {
    const url = `${this.baseUrl}/${game.id}`;
    return this.http.put<Game>(url, game).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  delete(game: Game): Observable<Game> {
    const url = `${this.baseUrl}/${game.id}`;
    return this.http.delete<Game>(url).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  } */
}
