import { Component } from '@angular/core';
import { EventService } from 'src/app/events/Shared/event.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-lists',
    template: `<div>
    <h1>Upcoming angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
     <event-thumbnail [event]="event"></event-thumbnail>
     </div>
     </div>
      </div>
      `
})
export class EventsListComponent {
  events: any[];
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
