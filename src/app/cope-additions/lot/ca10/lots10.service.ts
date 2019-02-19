import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS10 } from './lots10';

@Injectable({
  providedIn: 'root',
})
export class LotService10 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS10);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
