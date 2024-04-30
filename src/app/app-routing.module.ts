// app-routing.module.ts
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from '../pages/home/home.component'

const routes: Routes = [
    //{ path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },

    //{ path: '', redirectTo: 'AppComponent', pathMatch: 'full' },

    { path: '', redirectTo: '', pathMatch: 'full' },
    //{ path: 'login', component: LoginComponent },
    // { path: '**', component: ErrorComponent  },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
