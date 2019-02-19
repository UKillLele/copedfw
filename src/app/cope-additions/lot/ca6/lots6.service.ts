import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS6 } from './lots6';

@Injectable({
  providedIn: 'root',
})
export class LotService6 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS6);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
