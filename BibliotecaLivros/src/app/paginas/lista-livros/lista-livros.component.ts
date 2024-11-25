import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Livro } from '../../../interface/Livro';

@Component({
  selector: 'app-lista-livros',
  standalone: false,
  
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})

export class ListaLivrosComponent {
  constructor(private service: HttpService){
    this.getLivros()
  }

  livros: Livro[] = [];

    getLivros(): void{
    this.service.getAllLivros().subscribe((data) => {
      console.log('Dados recebidos:', data);
      this.livros = data;
    });
  }
}

