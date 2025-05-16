import { Component, output } from '@angular/core';

@Component({
  selector: 'dojo-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  /*
    Important:
    - Angular custom events do not bubble up the DOM.
    - Always use camelCase output names. Avoid prefixing output names with "on".
   */
  readonly toggled = output<boolean>();

  protected emitToggleEvent(event: Event): void {
    const { open } = event.target as HTMLDetailsElement;
    this.toggled.emit(open);
  }
}
