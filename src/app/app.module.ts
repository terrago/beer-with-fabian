import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FeierabendBier} from './FeierabendBier';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FeierabendBier],
  bootstrap: [AppComponent]
})
export class AppModule { }
