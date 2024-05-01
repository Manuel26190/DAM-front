import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        const welcomeSection = document.querySelector(
            '.welcome-section'
        ) as HTMLElement
        setTimeout(() => {
            // montre le texte en 0.1 sec
            welcomeSection.style.opacity = '1'
            setTimeout(() => {
                // Cache le texte au bout de 3.5 sec
                welcomeSection.style.opacity = '0'
                setTimeout(() => {
                    // Redirection vers '/home' après 3.5 secondes
                    this.router.navigate(['/home'])
                }, 3000)
            }, 3500)
        }, 100)
    }
}
