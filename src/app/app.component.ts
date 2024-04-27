import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'projet-dwwm'

    images: string[] = [
        '../assets/diaporama/Vautour-fauve-2.jpg',
        '../assets/pictures/Niverolle_alpine.jpg',
        '../assets/pictures/couple-oiseau.jpg',
        '../assets/pictures/Niverolle_alpine_2.jpg',
        '../assets/pictures/oiseau-rocher.jpg',
    ]
    currentImageIndex = 0

    constructor() {}

    ngOnInit(): void {
        this.startSlideshow()
    }

    startSlideshow(): void {
        setInterval(() => {
            // Afficher l'image suivante
            const nextImageIndex =
                (this.currentImageIndex + 1) % this.images.length

            // Transition de l'opacité de l'image actuelle à 0
            const currentImageElement = document.getElementById(
                'image-' + this.currentImageIndex
            )
            if (currentImageElement) {
                currentImageElement.style.opacity = '0'
            }

            // Transition de l'opacité de l'image suivante à 1
            const nextImageElement = document.getElementById(
                'image-' + nextImageIndex
            )
            if (nextImageElement) {
                setTimeout(() => {
                    nextImageElement.style.opacity = '1'
                }, 100) // Retard pour permettre à la première image de rester visible un court instant

                this.currentImageIndex = nextImageIndex
            }
        }, 9000) // Change d'image toutes les 9 secondes
    }
}
