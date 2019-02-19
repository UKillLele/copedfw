import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS5 } from './lots5';

@Injectable({
  providedIn: 'root',
})
export class LotService5 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS5);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
