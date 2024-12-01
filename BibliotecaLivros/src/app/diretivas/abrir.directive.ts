import { Directive, Input, ElementRef, Renderer2, HostListener, input } from '@angular/core';

@Directive({
  selector: '[ajustar]', //Nome da diretiva para ser usada no HTML;
  standalone: false
})
export class AbrirDirective {
 @Input('ajustar') targetDiv!: string; //Recebe o id do menu/div, assim como Target no JS básico;
 private isVisible = true; //Variavel logica de se o menu está escondido ou a mostra;

  constructor(private elem: ElementRef, private render: Renderer2) {}

  @HostListener('click') ajuste() { //Função que altera o estado do menu:
    const sidebar = document.getElementById(this.targetDiv); //Variavel que recebe o menu lateral para ser manipulado;
    if (sidebar) {
      this.isVisible = !this.isVisible //Alterna o estado
      this.render.setStyle(sidebar, 'display', this.isVisible ? 'block' : 'none'); //Muda de acordo coma condição '?', como um if;
    } else {
      console.error('ALgo deu errado...')
    }
  }
}
