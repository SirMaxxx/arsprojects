import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  /** The label shown in front of the check box */
  @Input() label = '';
  /** Whether ther checkbox is checked or not */
  @Input() isChecked = false;

  /** Whether the checkbox is disabled  */
  disabled = false;

  // Function to call when the value changes.
  onChange: any;

  // Function to call whern the component is touched
  onTouched: any;

  constructor() {}

  ngOnInit() {}

  /** Called from DOM when value is changed */
  valueChanged(event: any) {
    this.onChange(event.target.checked);
  }

  touched() {
    this.onTouched();
  }

  /**
   * ControlValueAccessor Implementation
   */

  /** Forms telling this component to write a new value  */
  writeValue(checked: boolean) {
    this.isChecked = checked;
  }
  // Forms uses this method to tell this component which function to call when its value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Forms uses this method to tell this component which function to call when it is touched
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Forms uses this method to tell this component to disable itself
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
