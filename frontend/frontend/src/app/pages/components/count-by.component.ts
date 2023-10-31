import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountByValues } from 'src/app/state/counter';
import { CounterCommands } from 'src/app/state/counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-count-by',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class="join">
<button (click)="setCountBy(1)" class="btn join-item">Count by 1</button>
<button (click)="setCountBy(2)" class="btn join-item">Count by 2</button>
<button (click)="setCountBy(5)" class="btn join-item">Count by 5</button>
</div>
  `,
  styles: [
  ]
})
export class CountByComponent {
  store = inject(Store);

  setCountBy(by: CountByValues) {
    this.store.dispatch(CounterCommands.setCountBy({by}));
  }
}
