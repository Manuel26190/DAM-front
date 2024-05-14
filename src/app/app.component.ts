import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    currentRoute: string = ''

    constructor(private router: Router) {
        // Router event pour obtenir le chemin actuel
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event: any) => {
                if (event instanceof NavigationEnd) {
                    this.currentRoute = event.url
                }
            })
    }
}
