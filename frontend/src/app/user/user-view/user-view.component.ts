import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/template/header/header.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.raiseDataEmitterEvent({
      title: 'Usuário',
      icon: 'person',
    });
  }

  ngOnInit(): void {}
}
