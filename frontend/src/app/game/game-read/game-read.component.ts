import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from './../game.model';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css'],
})
export class GameReadComponent implements OnInit {
  games: Game[] = [];

  @Output() newGameEvent = new EventEmitter<number>();

  addTotalGames(value: number) {
    this.newGameEvent.emit(value);
  }

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.read().subscribe((games) => {
      this.games = games;
      this.addTotalGames(games.length);
    });
  }
}
