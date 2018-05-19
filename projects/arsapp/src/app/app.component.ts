import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sureOrNot = false;
  arsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.arsForm = this.fb.group({
      areYouSure: [true, Validators.requiredTrue],
      yourName1: ['xxx', Validators.required],
      yourName2: ['yyy', Validators.required],
      yourName3: ['zzz', Validators.required],
      submit: []
    });
  }
}
