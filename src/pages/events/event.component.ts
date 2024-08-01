import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Event } from '../../core/model/EventModel'
import { EventService } from '../../core/services/event.service'
import { CommonModule } from '@angular/common'

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrl: './event.component.scss',
})
export class EventComponent implements OnInit {
    constructor(private eventService: EventService) {}

    eventList: Event[] = []

    ngOnInit(): void {
        // Affiche tous les événements
        this.eventService.getAllEvents().subscribe((data) => {
            if (data) {
                this.eventList = data
                console.log(this.eventList)
            } else {
                console.log('error')
            }
        })
    }
}
