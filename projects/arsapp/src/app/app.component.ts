import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  checkboxChanged(event: any) {
    if (event) {
      this.title = 'It Is Cool';
    } else {
      this.title = 'It is a little cool?';
    }
  }
}
