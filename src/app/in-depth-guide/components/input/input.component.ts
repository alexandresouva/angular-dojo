import {
  booleanAttribute,
  Component,
  input,
  model,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'dojo-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  requiredString = input.required<string>();
  optionalNumber = input<number>();
  optionalTextWithDefaultValue = input<string>('JavaScript');
  /*
    The most common use-case for input transforms is to accept a wider
     range of value types in templates, often including null and undefined.
   */
  textWithTransform = input('', { transform: this.trimString });

  // Built-in transforms
  disabled = input(false, { transform: booleanAttribute });
  value = input(0, { transform: numberAttribute });

  // Aliases
  privateLabel = input<string>('', { alias: 'publicLabel' });

  // Two-way data binding
  // with model:
  checkedWithModel = model.required<boolean>();
  // with normal properties:
  checkedWithProp = model<boolean>(false);

  toggleCheckboxModelValue(): void {
    this.checkedWithModel.update((value) => !value);
  }

  toggleCheckboxPropValue(): void {
    this.checkedWithProp.update((value) => !value);
  }

  trimString(value: string | undefined): string {
    return value?.trim() ?? '';
  }
}
