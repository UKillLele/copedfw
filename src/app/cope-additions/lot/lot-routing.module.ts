import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const lotRoutes: Routes = [
  { path: 'cope-additions/1/:url', component: LotComponent1 },
  { path: 'cope-additions/2/:url', component: LotComponent2 },
  { path: 'cope-additions/3/:url', component: LotComponent3 },
  { path: 'cope-additions/4/:url', component: LotComponent4 },
  { path: 'cope-additions/5/:url', component: LotComponent5 },
  { path: 'cope-additions/6/:url', component: LotComponent6 },
  { path: 'cope-additions/7/:url', component: LotComponent7 },
  { path: 'cope-additions/8/:url', component: LotComponent8 },
  { path: 'cope-additions/9/:url', component: LotComponent9 },
  { path: 'cope-additions/10/:url', component: LotComponent10 },
  { path: 'cope-additions/11/:url', component: LotComponent11 },
];

@NgModule({
  imports: [
    RouterModule.forChild(lotRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LotRoutingModule { }
