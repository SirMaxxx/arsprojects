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
  @Input() disabled = false;

  // Function to call when the value changes.
  onChange: any;
  // Function to call whern the component is touched
  onTouched: any;

  constructor() {}

  ngOnInit() {}

  valueChanged(event: any) {
    this.onChange(event.target.checked);
  }

  writeValue(checked: boolean) {
    this.isChecked = checked;
  }
  // Called by Abgular Forms to tell this component which function to call when its value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
