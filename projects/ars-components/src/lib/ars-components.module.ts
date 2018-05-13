import { NgModule } from '@angular/core';
import { ArsComponentsComponent } from './ars-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextInputComponent } from './textinput/textinput.component';

@NgModule({
  imports: [],
  declarations: [ArsComponentsComponent, CheckboxComponent, TextInputComponent],
  exports: [ArsComponentsComponent, CheckboxComponent, TextInputComponent]
})
export class ArsComponentsModule {}
