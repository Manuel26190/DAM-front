// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../pages/home/home.component'
import { LoginComponent } from '../pages/login/login.component'
import { WelcomeComponent } from '../components/welcome/welcome.component'
import { ContactComponent } from '../pages/contact/contact.component'
import { UserProfileComponent } from '../pages/user-profile/user-profile.component'

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent },
    //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'user-profile', component: UserProfileComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
