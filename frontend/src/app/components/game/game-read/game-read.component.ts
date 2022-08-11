import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from './../game.model';

@Component({
  selector: 'app-game-read',
  templateUrl: './game-read.component.html',
  styleUrls: ['./game-read.component.css'],
})
export class GameReadComponent implements OnInit {
  games: Game[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.read().subscribe((games) => (this.games = games));
  }
}
