import { Component, Inject } from '@angular/core';
import { State, increment, multiply } from '../../store';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [Store]
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<State>) {
    this.count$ = this.store.select((state) => state.count);
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  multiply(multiplier: string): void {
    this.store.dispatch(multiply({ multiplier: parseFloat(multiplier) }));
  }
}
