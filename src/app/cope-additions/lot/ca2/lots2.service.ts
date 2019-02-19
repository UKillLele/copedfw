import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Lot } from '../lot';
import { LOTS2 } from './lots2';

@Injectable({
  providedIn: 'root',
})
export class LotService2 {

  constructor() { }

  getLots(): Observable<Lot[]> {
    return of(LOTS2);
  }

  getLot(url: string) {
    return this.getLots().pipe(
      map((lots: Lot[]) => lots.find(lot => lot.url === url))
    );
  }
}
