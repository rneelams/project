import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-lists></events-lists>
  `
})
export class EventsAppComponent {
 }
