import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
  /*
   * Selectors:
   * - Custom selector name: <app-selector>
   * - Native element: div
   * - Attribute selector: [appBasic]
   * - Class selector: .app
   * - Id selector: #selector
   * - :not selector
   *
   * RULE:
   * If multiple selectors are provided, the component matches any of them.
   */
  selector: '<dojo-selector>, span, [appBasic], .app, #selector, .example:not(#xpto)',
  imports: [],
  templateUrl: './selector.component.html',
  /*
   * Styles:
   * - Both styles and stylesUrl are optional and can be used together (not recommend)
   * - In case of conflicts, the last one is used
   */
  styles: `:host {
    color: red;
  }`,
  styleUrl: './selector.component.scss',
  encapsulation: ViewEncapsulation.Emulated, // By default, emulated a Shadow DOM
})
export class SelectorComponent {
  label = input.required<string>();
}
