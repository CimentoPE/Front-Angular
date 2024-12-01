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

    //Sessão com a função de reiniciar a pagina:
    ngOnInit() {
      this.load();
    }
  
    load() {
      const HAS_LOADE = 'has_loae'
      const has_loade = sessionStorage.getItem(HAS_LOADE)
      if (!has_loade) {
        sessionStorage.setItem(HAS_LOADE,'true')
        location.reload()
      }
    }

  livros: Livro[] = [];


  getLivrosEmprestados(): void{
    this.service.getLivrosEmprestados().subscribe((data) => {
      this.livros = data;
    });
  }
}
