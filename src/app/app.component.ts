import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SelectorComponent} from './in-depth-guide/components/selector/selector.component';

@Component({
  selector: 'app-root',
  imports: [
    SelectorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // In Angular versions before 19.0.0, the standalone option defaults to false — must be explicitly set
  standalone: true
})
export class AppComponent {
  title = 'Angular Dojo';
}
