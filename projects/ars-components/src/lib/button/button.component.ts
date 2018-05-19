import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'ars-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true
    }
  ]
})
export class ButtonComponent extends BaseComponent implements OnInit {
  constructor() {
    super();
  }

  //#region Angular implementations
  ngOnInit() {}
  //#endregion

  /** Called from DOM when button clicked */
  clicked() {}
}
