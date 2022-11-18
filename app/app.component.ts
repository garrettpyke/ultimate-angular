import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <h2>{{ title + '!' }}</h2>
        <button (click)="handleClick(username.value)">Get value</button>
        <input type="text" #username> <!-- using Template #ref -->
        <div>{{ name }}</div>
      </div>
    `
})
export class AppComponent {
  title: string;
  name: string = 'Garrett';
  isHappy: boolean = true;
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleClick(value: string) {
    console.log(value);
  }

}
