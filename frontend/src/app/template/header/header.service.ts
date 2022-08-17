import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  dataEmitter = new Subject<HeaderData>();

  constructor() {}

  raiseDataEmitterEvent(data: HeaderData) {
    this.dataEmitter.next(data);
  }
}
