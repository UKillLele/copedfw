import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS1 } from './lots1';

@Injectable({
  providedIn: 'root',
})
export class LotService1 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS1);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
