import { Component } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Event } from '../../core/model/EventModel'
import { EventService } from '../../core/services/event.service'

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrl: './event.component.scss',
})
export class EventComponent {
    constructor(private eventService: EventService) {}
}
