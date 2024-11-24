import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { AcervoLivrosComponent } from './paginas/acervo-livros/acervo-livros.component';
import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { InfoLivrosComponent } from './paginas/info-livros/info-livros.component';

// Rotas do site, cada uma facilita a transição entre as 'telas' através da URL:
const routes: Routes = [
  //Tutorial: {path: 'nome-da-rota', component: NomeDoComponente}
  //O nome da rota pode ser qualquer coisa, sintam-se livres para modificar isso.
  {path: '', redirectTo: '/acervo-livros', pathMatch: 'full'}, //Rota neutra que sempre leva para a pagina principal
  {path: 'acervo-livros', component: AcervoLivrosComponent}, //Rota da biblioteca de livros (Home)
  {path: 'lista-livros', component: ListaLivrosComponent}, //Rota da lista de livros do usuario
  {path: 'info-livros', component: InfoLivrosComponent} //Rota da pagina exclusiva entre cada livro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
