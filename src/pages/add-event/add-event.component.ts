import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
    FormGroup,
    ReactiveFormsModule,
    FormBuilder,
    Validators,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { EventService } from '../../core/services/event.service'
import { Event } from '@angular/router'

@Component({
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrl: './add-event.component.scss',
})
export class AddEventComponent implements OnInit {
    addEventForm!: FormGroup
    id: number = 0

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private eventService: EventService
    ) {
        this.addEventForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            location: ['', Validators.required],
            image: ['', Validators.required],
            date_start: ['', Validators.required],
        })
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id']
    }

    //Cette function sert à ajouter ou mettre à jour une tâche
    onSubmit() {
        // Ajouter une tâche
        if (this.addEventForm.valid) {
            console.log(this.addEventForm.value)
            this.eventService.addEvent(this.addEventForm.value).subscribe({
                next: (response) => {
                    console.log(response)
                },
                error: (error) => {
                    console.error('add_event error', error.error)
                },
            })
        }
    }
}
