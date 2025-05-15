import { Component, effect, signal } from '@angular/core';
import { SelectorComponent } from '../../in-depth-guide/components/selector/selector.component';
import { InputComponent } from '../../in-depth-guide/components/input/input.component';

@Component({
  selector: 'dojo-components',
  imports: [SelectorComponent, InputComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  checkedWithSignal = signal(false);
  checkedWithProp = false;

  constructor() {
    effect(() => {
      console.log(`Checked: ${this.checkedWithSignal()}`);
    });
  }

  loggerCheckedChange(checked: boolean): void {
    console.log('loggerCheckedChange: ', checked);
  }
}
