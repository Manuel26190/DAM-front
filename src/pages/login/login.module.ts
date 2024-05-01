import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component'
import { HeaderModule } from '../../components/header/header.module'
import { FooterModule } from '../../components/footer/footer.module'

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, HeaderModule, FooterModule],
    exports: [LoginComponent],
})
export class LoginModule {}
