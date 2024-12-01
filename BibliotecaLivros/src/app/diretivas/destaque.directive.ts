import { Directive, HostBinding, HostListener } from '@angular/core';
import { hostname } from 'os';

@Directive({
  selector: '[destacar]',
  standalone: false
})
export class DestaqueDirective {
   @HostBinding('style.background') corFundo = ""
   @HostBinding('style.color') cor = ""
   @HostBinding('style.scale') tamanho = ""

   @HostListener('mouseover') destacar(){
    this.corFundo = 'rgb(141, 208, 40)'
    this.cor = '#f4f4f4'
    this.tamanho = '1.2'
   }

   @HostListener('mouseleave') voltar(){
    this.corFundo = 'none'
    this.cor = 'rgb(141, 208, 40)'
    this.tamanho = '1'
   }

  constructor() { }
}
