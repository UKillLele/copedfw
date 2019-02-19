import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS7 } from './lots7';

@Injectable({
  providedIn: 'root',
})
export class LotService7 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS7);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
