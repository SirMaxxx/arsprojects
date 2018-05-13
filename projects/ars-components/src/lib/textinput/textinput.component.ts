import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class TextInputComponent implements OnInit, ControlValueAccessor {
  /** The label shown in front of the text box */
  @Input() label = '';

  value = '';
  /** Whether the textbox is disabled  */
  disabled = false;

  // Function to call when the value changes.
  onChange: any;

  // Function to call whern the component is touched
  onTouched: any;

  constructor() {}

  ngOnInit() {}

  /** Called from DOM when value is changed */
  valueChanged(event: any) {
    console.log('the event is ', event);
    this.value = event.target.value;
    this.onChange(event.target.value);
  }

  touched() {
    this.onTouched();
  }

  /**
   * ControlValueAccessor Implementation
   */

  /** Forms telling this component to write a new value  */
  writeValue(value: string) {
    console.log('write value ', value);

    this.value = value;
  }
  // Forms uses this method to tell this component which function to call when its value changes
  registerOnChange(fn: any): void {
    console.log('Register on change');

    this.onChange = fn;
  }

  // Forms uses this method to tell this component which function to call when it is touched
  registerOnTouched(fn: () => void): void {
    console.log('Register on touch');
    this.onTouched = fn;
  }

  // Forms uses this method to tell this component to disable itself
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
