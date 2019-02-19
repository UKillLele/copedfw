import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LotComponent1 } from './ca1/lot1.component';
import { LotComponent2 } from './ca2/lot2.component';
import { LotComponent3 } from './ca3/lot3.component';
import { LotComponent4 } from './ca4/lot4.component';
import { LotComponent5 } from './ca5/lot5.component';
import { LotComponent6 } from './ca6/lot6.component';
import { LotComponent7 } from './ca7/lot7.component';
import { LotComponent8 } from './ca8/lot8.component';
import { LotComponent9 } from './ca9/lot9.component';
import { LotComponent10 } from './ca10/lot10.component';
import { LotComponent11 } from './ca11/lot11.component';

import { LotRoutingModule } from './lot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LotRoutingModule
  ],
  declarations: [
    LotComponent1,
    LotComponent2,
    LotComponent3,
    LotComponent4,
    LotComponent5,
    LotComponent6,
    LotComponent7,
    LotComponent8,
    LotComponent9,
    LotComponent10,
    LotComponent11
  ]
})
export class LotsModule {}
