import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css'],
})
export class GameDeleteComponent implements OnInit {
  game: Game = { name: '', price: null };

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id).subscribe((game) => (this.game = game));
  }

  deleteGame(): void {
    this.gameService.delete(this.game).subscribe(() => {
      this.gameService.showMessage('Jogo excluído!!!');
      this.router.navigate(['/games']);
    });
  }

  cancel(): void {
    this.router.navigate(['/games']);
  }
}
