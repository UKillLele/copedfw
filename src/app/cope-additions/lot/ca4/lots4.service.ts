import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS4 } from './lots4';

@Injectable({
  providedIn: 'root',
})
export class LotService4 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS4);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
