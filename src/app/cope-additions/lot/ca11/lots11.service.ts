import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS11 } from './lots11';

@Injectable({
  providedIn: 'root',
})
export class LotService11 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS11);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
