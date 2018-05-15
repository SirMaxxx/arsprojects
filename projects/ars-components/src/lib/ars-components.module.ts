import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArsComponentsComponent } from './ars-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextInputComponent } from './textinput/textinput.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule],
  declarations: [ArsComponentsComponent, CheckboxComponent, TextInputComponent],
  exports: [ArsComponentsComponent, CheckboxComponent, TextInputComponent]
})
export class ArsComponentsModule {}
