import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component' // Importez HeaderComponent
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [HeaderComponent], // Déclarez HeaderComponent
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
