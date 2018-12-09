import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApalaHomeComponent } from './apala-home/apala-home.component';
import { TheHouseOfApalaComponent } from './the-house-of-apala/the-house-of-apala.component';
import { ApalaContactComponent } from './apala-contact/apala-contact.component';
import { ApalaExquisiteCollectionComponent } from './apala-exquisite-collection/apala-exquisite-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ApalaHomeComponent,
    TheHouseOfApalaComponent,
    ApalaContactComponent,
    ApalaExquisiteCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
