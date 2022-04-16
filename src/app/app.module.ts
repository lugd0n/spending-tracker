import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SpendingListComponent } from './spending-list/spending-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SpendingListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
