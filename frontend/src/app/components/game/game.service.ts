import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  baseUrl = 'http://localhost:3001/games';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl, game).pipe(
      map((e) => e),
      catchError((e) => this.handleError(e))
    );
  }

  read(): Observable<Game[]> {
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
  }

  handleError(e: any): Observable<any> {
    this.showMessage('Ops, parece que ocorreu um erro.', true);
    return EMPTY;
  }
}
