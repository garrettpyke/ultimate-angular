import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <h2>{{ title + '!' }}</h2>
        <button (click)="handleClick()">change name</button>
        <input type="text"
              [ngModel]="name"
              (ngModelChange)="handleChange($event)">
        <input type="text"
              [(ngModel)]="name">
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
  handleClick() {
    this.name = 'Pyke';
  }
  handleChange(value: string) {
    this.name = value;
  }
}
