import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'dojo-host',
  imports: [],
  template: `<progress [value]="value()" [attr.max]="maxValue"></progress>`,
  // The DOM element that matches a component's selector is that component's host element.
  host: {
    '[attr.aria-label]': '"Loading progress"',
    '[class.complete]': 'isComplete()',
    '(click)': 'increment()',
  },
  styles: `
    :host {
      display: block;
      height: 20px;

      &.complete {
        progress {
          accent-color: green;
        }
      }

      progress {
        height: 100%;
      }
    }
  `,
})
export class HostComponent {
  protected value = signal(0);
  protected maxValue = 100;
  protected isComplete = computed(() => this.value() >= this.maxValue);

  protected increment() {
    const canIncrement = this.value() < this.maxValue;
    if (!canIncrement) return;

    this.value.update((v) => Math.min(v + 10, this.maxValue));
  }
}
