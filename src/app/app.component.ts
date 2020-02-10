import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  title = 'Dolzhok';

  changes(formValue) {
    this.items.push(formValue.value);
    console.log('main: ' + this.items);
  }
}
