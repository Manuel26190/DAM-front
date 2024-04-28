// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../login_module/login_component/login.component'
import { AppComponent } from './app.component'
import { HomeComponent } from '../home/home/home.component'

const routes: Routes = [
    { path: '', component: AppComponent },
    //{ path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '**', component: ErrorComponent  },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
