import { Component, input } from '@angular/core';

@Component({
  selector: 'dojo-simple',
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
})
export class SimpleComponent {
  text = input.required<string>();
  private readonly _internalText = 'simple works!';
}
