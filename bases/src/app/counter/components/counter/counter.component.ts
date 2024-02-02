import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>{{ counter }}</h2>

    <button (click)="increaseBy('+')">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy('-')">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 23;

  increaseBy(signo: string): void {
    signo === '+' ? (this.counter += 1) : (this.counter -= 1);
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
