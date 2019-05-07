import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InvestmentComponent } from './investment/investment.component';
import { RelationshipsComponent } from './investment/relationships/relationships.component';
import { PageNotFoundComponent } from './404/404.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: '2673', component: InvestmentComponent },
  { path: '2673/relationships', component: RelationshipsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
