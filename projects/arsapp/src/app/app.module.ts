import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';

import { AppComponent } from './app.component';

import { ArsComponentsModule } from 'ars-components';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ControllerComponent } from './controller/controller.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ArsComponentsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
