import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS3 } from './lots3';

@Injectable({
  providedIn: 'root',
})
export class LotService3 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS3);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
