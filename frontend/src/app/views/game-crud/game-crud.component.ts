import { HeaderService } from './../../components/template/header/header.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-crud',
  templateUrl: './game-crud.component.html',
  styleUrls: ['./game-crud.component.css'],
})
export class GameCrudComponent implements OnInit {
  totalGamesReceived: number = 0;

  handleGamesReceived(value: number) {
    this.totalGamesReceived = value;
  }

  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Cadastro de Jogos',
      icon: 'videogame_asset',
    });
  }

  ngOnInit(): void {}

  navigateToGameCreate(): void {
    this.router.navigate(['/games/create']);
  }
}
