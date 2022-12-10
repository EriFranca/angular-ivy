import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoiceTrackingPanelComponent } from './invoice-tracking-panel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,InvoiceTrackingPanelComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
