import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Livro } from '../../../interface/Livro';
import { Location } from '@angular/common';

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

  //Sessão com a função de reiniciar a pagina:
  ngOnInit() {
    this.load();
  }

  load() {
    const HAS_LOADED = 'has_loaded'
    const has_loaded = sessionStorage.getItem(HAS_LOADED)
    if (!has_loaded) {
      sessionStorage.setItem(HAS_LOADED,'true')
      location.reload()
    }
  }

  livros: Livro[] = [];

    getLivros(): void{
    this.service.getAllLivros().subscribe((data) => {
      console.log('Dados recebidos:', data);
      this.livros = data;
    });
  }
}