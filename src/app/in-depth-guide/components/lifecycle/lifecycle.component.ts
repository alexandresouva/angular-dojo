import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DestroyRef,
  DoCheck,
  effect,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

const TAG = '[Lifecycle]';

@Component({
  selector: 'dojo-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  /*
   * Notes:
   * - A component's lifecycle is the sequence of steps that happen between
   * the component's creation and its destruction.
   * - Angular walks your application tree from top to bottom,
   * checking template bindings for changes.
   *
   * Steps:
   * 1. Constructor
   * 2. OnInit
   * 2. OnChanges
   * 3. DoCheck
   * 4. AfterContentInit
   * 5. AfterContentChecked
   * 6. AfterViewInit
   * 7. AfterViewChecked
   */
  // Explorar: lifecycle do componente e do app Angular
  // implements vs extends

  number = input<number>();
  private hookIndex = 1;

  private logPhase(phase: string) {
    console.log(TAG, `---- ${phase.toUpperCase()} ----`);
  }

  private logLifecycleHook(...args: unknown[]) {
    console.log(TAG, `${this.hookIndex++}. `, ...args);
  }

  constructor() {
    this.logPhase('Creation Phase');
    this.logLifecycleHook(
      'constructor runs when Angular instantiates the component.',
    );

    effect(() => {
      inject(DestroyRef).onDestroy(() => {
        // Tip: DestroyRef injection can be used outside this component
        this.logLifecycleHook('onDestroy using DestroyRef');
      });
    });
  }

  ngOnInit() {
    this.logPhase('Change Detection Phase');
    this.logLifecycleHook(
      "ngOnInit runs once after Angular has initialized all the component's inputs.",
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logLifecycleHook(
      "ngOnChanges runs every time the component's inputs have changed.",
    );
  }

  ngDoCheck() {
    this.logLifecycleHook(
      'ngDoCheck runs every time this component is checked for changes.',
    );
  }

  ngAfterContentInit() {
    this.logLifecycleHook(
      "ngAfterContentInit runs once after the component's content has been initialized.",
    );
  }

  ngAfterContentChecked() {
    this.logLifecycleHook(
      'ngAfterContentChecked runs every time this component content has been checked for changes.',
    );
  }

  ngAfterViewInit() {
    this.logLifecycleHook(
      "ngAfterViewInit runs once after the component's view has been initialized.",
    );
  }

  ngAfterViewChecked() {
    this.logLifecycleHook(
      "ngAfterViewChecked runs every time the component's view has been checked for changes.",
    );
  }

  ngOnDestroy() {
    this.logPhase('Destruction Phase');
    this.logLifecycleHook(
      'ngOnDestroy runs just before Angular destroys the component.',
    );
  }
}
