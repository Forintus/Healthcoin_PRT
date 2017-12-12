import { Component, Input } from '@angular/core';

/**
 * Generated class for the EmptyListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'empty-list',
  templateUrl: 'empty-list.html'
})
export class EmptyListComponent {

  @Input() title: string;
  @Input() message: string;
  @Input() icon: string;
  
  constructor() {
    console.log('Constructing EmptyList Component');
  }
}