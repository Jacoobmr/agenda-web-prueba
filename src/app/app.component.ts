import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'La Agenda Perrona';
  owner = 'Sergio';

  gretter(name) {
    this.owner = name;
  }
}
