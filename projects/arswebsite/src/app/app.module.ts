import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ArsComponentsModule } from 'ars-components';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ArsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
