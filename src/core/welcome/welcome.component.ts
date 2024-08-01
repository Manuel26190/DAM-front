import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { OpacityEffectDirective } from '../directives/opacity-effect.directive'

@Component({
    imports: [OpacityEffectDirective],
    standalone: true,
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        const welcomeSection = document.querySelector(
            '.welcome-section'
        ) as HTMLElement
        setTimeout(() => {
            // Affiche le texte en 0.1 sec
            welcomeSection.style.opacity = '1'
            setTimeout(() => {
                // Cache le texte au bout de 2.5 sec
                welcomeSection.style.opacity = '0'
                setTimeout(() => {
                    // Redirection vers '/home' après 2.5 secondes
                    this.router.navigate(['/home'])
                }, 2000)
            }, 2000)
        }, 100)
    }
}
