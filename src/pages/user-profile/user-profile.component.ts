import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
    @ViewChild('postModal') postModalElement!: ElementRef
    @ViewChild('eventModal') eventModalElement!: ElementRef
    @ViewChild('notifModal') notifModalElement!: ElementRef

    openModal(modalType: string): void {
        const postModal = this.postModalElement.nativeElement
        const eventModal = this.eventModalElement.nativeElement
        const notifModal = this.notifModalElement.nativeElement

        postModal.style.display = 'none'
        eventModal.style.display = 'none'
        notifModal.style.display = 'none'

        switch (modalType) {
            case 'post':
                postModal.style.display = 'block'
                break
            case 'event':
                eventModal.style.display = 'block'
                break
            case 'notif':
                notifModal.style.display = 'block'
                break
        }
    }
}
