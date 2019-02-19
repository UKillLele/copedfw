import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS9 } from './lots9';

@Injectable({
  providedIn: 'root',
})
export class LotService9 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS9);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
