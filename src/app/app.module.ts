import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpendingItemComponent } from './spending-list/spending-item/spending-item.component';
import { SpendingListComponent } from './spending-list/spending-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SpendingItemComponent,
    SpendingListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
