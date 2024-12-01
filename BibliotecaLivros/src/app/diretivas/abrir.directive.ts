import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fechar]',
  standalone: false
})
export class AbrirDirective {
  @HostBinding('style.width') largura: any
  @HostListener('click') fechar(){
    this.largura = '0px'
  }

  constructor() { }
}
