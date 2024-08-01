// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../pages/home/home.component'
import { LoginComponent } from '../pages/login/login.component'
import { WelcomeComponent } from '../core/welcome/welcome.component'
import { ContactComponent } from '../pages/contact/contact.component'
import { UserProfileComponent } from '../pages/user-profile/user-profile.component'
import { PublicationComponent } from '../pages/publication/publication.component'
import { EventComponent } from '../pages/event/event.component'
import { AddEventComponent } from '../pages/add-event/add-event.component'

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'publication', component: PublicationComponent },
    { path: 'event', component: EventComponent },
    { path: 'add_event', component: AddEventComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
