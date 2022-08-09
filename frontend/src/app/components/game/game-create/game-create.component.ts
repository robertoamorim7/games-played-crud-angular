import { Router } from '@angular/router';
import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from './../game.model';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css'],
})
export class GameCreateComponent implements OnInit {
  game: Game = {
    name: 'Spiderman',
    price: 150.8,
  };

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {}

  createGame(): void {
    this.gameService.create(this.game).subscribe(() => {
      this.gameService.showMessage('cadastrando jogos toptoptpop');
      this.router.navigate(['/games']);
    });
  }

  cancel(): void {
    this.router.navigate(['/games']);
  }
}
