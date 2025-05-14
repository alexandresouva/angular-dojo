import { Component } from '@angular/core';
import {SelectorComponent} from "../../in-depth-guide/components/selector/selector.component";

@Component({
  selector: 'dojo-components',
    imports: [
        SelectorComponent
    ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
