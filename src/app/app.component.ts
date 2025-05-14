import {Component} from '@angular/core';

import {ComponentsComponent} from './topics-containers/components/components.component';

@Component({
  selector: 'app-root',
  imports: [
    ComponentsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // In Angular versions before 19.0.0, the standalone option defaults to false — must be explicitly set
  standalone: true
})
export class AppComponent {
  title = 'Angular Dojo';
}
