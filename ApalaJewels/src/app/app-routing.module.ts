import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApalaHomeComponent } from './apala-home/apala-home.component';
import { TheHouseOfApalaComponent } from './the-house-of-apala/the-house-of-apala.component';
import { ApalaContactComponent } from './apala-contact/apala-contact.component';
import { ApalaExquisiteCollectionComponent } from './apala-exquisite-collection/apala-exquisite-collection.component';

const routes: Routes = [
  { path: 'home', component: ApalaHomeComponent },
  { path: 'house-of-apala', component: TheHouseOfApalaComponent },
  { path: 'contact', component: ApalaContactComponent },
  { path: 'exquisite-collections', component: ApalaExquisiteCollectionComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
