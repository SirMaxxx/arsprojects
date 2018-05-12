import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
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

  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Input() disabled: boolean = false;

  @Output('checkedChanged') checkedChangedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Function to call when the value changes.
  onChange = (checked: boolean) => { };
  onTouched = () => { };

  constructor() { }

  ngOnInit() {
  }

  checkedChanged(event: any) {
    this.checkedChangedEvent.emit(event.target.checked);
    this.onChange(event.target.checked);
  }


  writeValue(checked: boolean) {
    this.isChecked = checked;
  }
  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
