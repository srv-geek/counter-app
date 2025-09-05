import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(v => v + 1);
  }

  decrement() {
    this.counter.update(v => v > 0 ? v - 1 : 0);
  }


  reset() {
    this.counter.set(0);
  }
}
