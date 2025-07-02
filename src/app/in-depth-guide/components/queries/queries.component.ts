import {
  Component,
  computed,
  effect,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';
import { SimpleComponent } from '../simple/simple.component';

const TAG = 'Queries';

@Component({
  selector: 'dojo-queries',
  imports: [SimpleComponent],
  templateUrl: './queries.component.html',
  styleUrl: './queries.component.scss',
})
export class QueriesComponent {
  header = viewChild<ElementRef<HTMLHeadingElement>>('title');

  headerText = computed(() => this.header()?.nativeElement.textContent);

  firstComponent = viewChild(SimpleComponent);
  allComponents = viewChildren(SimpleComponent);

  // Error in execution time if the element is not present
  // NG0951: Child query result is required but no value is available.
  requiredBtn = viewChild.required<HTMLButtonElement>('requiredBtn');

  constructor() {
    effect(() => {
      console.log(
        `[${TAG}] Header: ${this.header()?.nativeElement.textContent}`
      );
      console.log(`[${TAG}] First:`, this.firstComponent()?.text());
      console.log(
        `${TAG} - All simple components instances:`,
        this.allComponents().map((component) => component.text())
      );
    });
  }
}
