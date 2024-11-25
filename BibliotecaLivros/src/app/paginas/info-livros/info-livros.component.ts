import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Livro } from '../../../interface/Livro';

@Component({
  selector: 'app-info-livros',
  standalone: false,
  
  templateUrl: './info-livros.component.html',
  styleUrl: './info-livros.component.css'
})
export class InfoLivrosComponent {

  constructor(private service: HttpService){
    this.getLivrosEmprestados()
  }

  livros: Livro[] = [];


  getLivrosEmprestados(): void{
    this.service.getLivrosEmprestados().subscribe((data) => {
      this.livros = data;
    });
  }
}
