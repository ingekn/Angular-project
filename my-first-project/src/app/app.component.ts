import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'My first app';
  clickedButton = false;
  clicks = [];

  showDetails() {
    this.clickedButton = !this.clickedButton;
    this.clicks.push(this.clicks.length + 1);
  }
}
