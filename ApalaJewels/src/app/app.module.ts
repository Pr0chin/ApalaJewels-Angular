import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApalaHomeComponent } from './apala-home/apala-home.component';
import { TheHouseOfApalaComponent } from './the-house-of-apala/the-house-of-apala.component';

@NgModule({
  declarations: [
    AppComponent,
    ApalaHomeComponent,
    TheHouseOfApalaComponent,
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
