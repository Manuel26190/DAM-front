import { Component, OnInit, Renderer2 } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private renderer: Renderer2) {}

    ngOnInit(): void {
        const section = document.querySelector('.app-section')
        // Ajoute la classe visible après un délai de 4 secondes
        setTimeout(() => {
            this.renderer.addClass(section, 'visible')
        }, 100)
        // Redirige vers la page d'accueil après 6 secondes

        setTimeout(() => {
            this.renderer.addClass(section, 'invisible')
            setTimeout(() => {
                section?.remove()
            }, 3000)
        }, 3000)

        setTimeout(() => {
            this.router.navigate(['/home'])
        }, 5500)
    }
}
