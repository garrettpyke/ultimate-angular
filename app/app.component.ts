import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
        <h2>{{ title + '!' }}</h2>
        <h2 [innerHTML]="title"></h2>
        <img [src]="logo">
        <div>
          {{ numberOne + numberTwo }}
        </div>
        <div>
          {{ isHappy ? ':)' : ':(' }}
      </div>  
    `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Ultimate Angular';
  }
}