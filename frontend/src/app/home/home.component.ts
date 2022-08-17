import { HeaderService } from '../template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Início',
      icon: 'home',
    });
  }

  ngOnInit(): void {}
}
