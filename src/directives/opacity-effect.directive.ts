import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: '[appOpacityEffect]',
})
export class OpacityEffectDirective implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.style.transition = 'opacity 2.5s ease-in-out'
    }
}
