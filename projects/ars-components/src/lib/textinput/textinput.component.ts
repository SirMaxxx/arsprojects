import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ars-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent extends BaseComponent implements OnInit {
  /** The label shown in front of the text box */
  @Input() label = '';

  constructor() {
    super();
  }

  //#region Angular implementations
  ngOnInit() {}
  //#endregion

  //#region DOM event handlers
  /** Called from DOM when value is changed */
  valueChanged(event: any) {
    this.value = event.target.value;
    this.onChange(event.target.value);
  }

  /** Called from DOM when control is touched */
  touched() {
    this.onTouched();
  }
  //#endregion
}
