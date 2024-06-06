import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
    images: string[] = [
        '../assets/diaporama/vautour-fauve.jfif',
        '../assets/diaporama/Niverolle_alpine_2.jpg',
        //'../assets/pictures/couple-oiseau.jpg',
        '../../assets/diaporama/Faucon_crecerelle.webp',
        '../../assets/diaporama/diapo_1.jpeg',
        '../../assets/diaporama/diapo_2.jpeg',
        '../../assets/diaporama/diapo_3.jpeg',
        '../../assets/diaporama/diapo_4.jpeg',
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
        }, 10000) // Change d'image toutes les 8 secondes
    }
}
