import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WelcomeComponent } from './welcome.component'
import { OpacityEffectDirective } from '../../directives/opacity-effect.directive'

@NgModule({
    declarations: [WelcomeComponent, OpacityEffectDirective],
    imports: [CommonModule],
})
export class WelcomeModule {}
