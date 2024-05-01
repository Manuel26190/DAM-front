import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderModule } from '../components/header/header.module'
import { FooterModule } from '../components/footer/footer.module'
import { HomeModule } from '../pages/home/home.module'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FooterModule,
        HomeModule,
        CommonModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
