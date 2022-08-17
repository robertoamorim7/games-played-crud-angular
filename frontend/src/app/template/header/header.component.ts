import { HeaderData } from './header-data.model';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerInfo: HeaderData = {
    title: '',
    icon: '',
  };

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.dataEmitter.subscribe((value) => {
      this.headerInfo = value;
    });
  }
}
