import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FooterModule } from '../../components/footer/footer.module'
import { HeaderModule } from '../../components/header/header.module'

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, FooterModule, HeaderModule],
    exports: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
