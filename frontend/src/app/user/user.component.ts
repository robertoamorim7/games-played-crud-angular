import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/header/header.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Usuário',
      icon: 'person',
    });
  }

  ngOnInit(): void {}
}
