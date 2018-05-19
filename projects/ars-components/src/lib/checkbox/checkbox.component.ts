import { Component, OnInit, Input, forwardRef } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ars-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent extends BaseComponent implements OnInit {
  /** The label shown in front of the check box */
  @Input() label = '';

  constructor() {
    super();
  }

  //#region Angular implementations
  ngOnInit() {}
  //#endregion

  //#region DOM event handlers
  /** Called from DOM when value is changed */

  valueChanged(event: MatCheckboxChange) {
    this.onChange(event.checked);
  }

  /** Called from DOM when control is touched */
  touched() {
    this.onTouched();
  }
  //#endregion
}
