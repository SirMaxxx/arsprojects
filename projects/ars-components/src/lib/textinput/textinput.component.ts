import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ars-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextinputComponent),
      multi: true
    }
  ]
})
export class TextinputComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';

  // Function to call when the value changes.
  onChange = (checked: boolean) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit() {}
  checkedChanged(event: any) {
    this.onChange(event.target.checked);
  }

  writeValue(value: string) {}
  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}
}
