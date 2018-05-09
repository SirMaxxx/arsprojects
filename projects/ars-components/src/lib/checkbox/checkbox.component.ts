import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ars-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  
  @Output('checkedChanged') checkedChangedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  checkedChanged(event: any) {
    this.checkedChangedEvent.emit(event.target.checked);
  }

}
