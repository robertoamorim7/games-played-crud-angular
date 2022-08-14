import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-crud',
  templateUrl: './game-crud.component.html',
  styleUrls: ['./game-crud.component.css'],
})
export class GameCrudComponent implements OnInit {
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
