import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArsComponentsComponent } from './ars-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextInputComponent } from './textinput/textinput.component';
import { ButtonComponent } from './button/button.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    ArsComponentsComponent,
    CheckboxComponent,
    TextInputComponent,
    ButtonComponent
  ],
  exports: [
    ArsComponentsComponent,
    CheckboxComponent,
    TextInputComponent,
    ButtonComponent
  ]
})
export class ArsComponentsModule {}
