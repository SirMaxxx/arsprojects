import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';

import { AppComponent } from './app.component';

import { ArsComponentsModule } from 'ars-components';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [AppComponent, CustomerDetailComponent, CustomersComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ArsComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
