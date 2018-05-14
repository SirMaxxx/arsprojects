import { ControlValueAccessor } from '@angular/forms';

export class BaseComponent implements ControlValueAccessor {
  disabled = false;
  value = null;

  // Function to call when the value changes.
  onChange: any;

  // Function to call when the component is touched
  onTouched: any;

  /**
   * ControlValueAccessor Implementation
   */

  /** Forms telling this component to write a new value  */
  writeValue(value: string) {
    this.value = value;
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
