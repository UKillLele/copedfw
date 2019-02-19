import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS8 } from './lots8';

@Injectable({
  providedIn: 'root',
})
export class LotService8 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS8);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
