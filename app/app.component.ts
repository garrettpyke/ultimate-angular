import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <h2>{{ title + '!' }}</h2>
        <input type="text"
            [value]="name"
            (input)="handleChange($event.target.value)">
        <div *ngIf="name.length >= 3">
          Searching for...{{ name }}
        </div>
      </div>
    `
})
export class AppComponent {
  title: string;
  name: string = '';
  isHappy: boolean = true;
  constructor() {
    this.title = 'Ultimate Angular';
  }
  handleChange(value: string) {
    this.name = value;
  }

}
