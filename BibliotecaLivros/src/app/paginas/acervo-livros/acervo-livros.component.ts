import { Component } from '@angular/core';

@Component({
  selector: 'app-acervo-livros',
  standalone: false,
  
  templateUrl: './acervo-livros.component.html',
  styleUrl: './acervo-livros.component.css'
})
export class AcervoLivrosComponent {
  constructor(private pipeControlService: PipecontrolService) {sessionStorage.clear()}

  togglePipe() {
    if (this.pipeControlService.isPipeEnabled) {
      this.pipeControlService.disablePipe();
    } else {
      this.pipeControlService.enablePipe();
    }
  }
}
