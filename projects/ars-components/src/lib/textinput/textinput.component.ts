import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

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
export class TextinputComponent implements OnInit {
  @Input() label: string = '';
  constructor() { }

  ngOnInit() {
  }

}
