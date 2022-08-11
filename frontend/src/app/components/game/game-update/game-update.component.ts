import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-update',
  templateUrl: './game-update.component.html',
  styleUrls: ['./game-update.component.css'],
})
export class GameUpdateComponent implements OnInit {
  game: Game = { name: '', price: null };

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id).subscribe((game) => {
      this.game = game;
    });
  }

  updateGame(): void {
    this.gameService.update(this.game).subscribe(() => {
      this.gameService.showMessage('Cadastro atualizado!!!');
      this.router.navigate(['/games']);
    });
  }

  cancel(): void {
    this.router.navigate(['/games']);
  }
}
