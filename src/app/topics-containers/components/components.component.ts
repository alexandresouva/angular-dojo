import { Component, effect, signal } from '@angular/core';
import { SelectorComponent } from '../../in-depth-guide/components/selector/selector.component';
import { InputComponent } from '../../in-depth-guide/components/input/input.component';
import { OutputComponent } from '../../in-depth-guide/components/output/output.component';
import { ContentComponent } from '../../in-depth-guide/components/content/content.component';
import { HostComponent } from '../../in-depth-guide/components/host/host.component';
import { LifecycleComponent } from '../../in-depth-guide/components/lifecycle/lifecycle.component';

@Component({
  selector: 'dojo-components',
  imports: [
    SelectorComponent,
    InputComponent,
    OutputComponent,
    ContentComponent,
    HostComponent,
    LifecycleComponent,
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {
  protected checkedWithSignal = signal(false);
  protected checkedWithProp = false;
  protected number = 0;

  constructor() {
    effect(() => {
      console.log(`Checked: ${this.checkedWithSignal()}`);
    });
  }

  protected loggerCheckedChange(checked: boolean): void {
    console.log('loggerCheckedChange: ', checked);
  }

  protected loggerToggleEvent(toggled: boolean): void {
    console.log(`toggled: ${toggled}`);
  }
}
