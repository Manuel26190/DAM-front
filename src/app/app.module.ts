import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from '../pages/home/home.module'
import { FooterModule } from '../components/footer/footer.module'
import { HeaderModule } from '../components/header/header.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        FooterModule,
        HeaderModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
