import { Component } from '@angular/core';

@Component({
  selector: 'app-acervo-livros',
  standalone: false,
  
  templateUrl: './acervo-livros.component.html',
  styleUrl: './acervo-livros.component.css'
})
export class AcervoLivrosComponent {
  constructor () {
    sessionStorage.clear()
  }
}
