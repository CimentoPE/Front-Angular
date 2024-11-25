import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from '../../interface/Livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  linkApi1="http://localhost:8080/livros"
  linkApi2="http://localhost:8080/livros/mais-emprestados"
  constructor(private http: HttpClient) { }
  
  getAllLivros():Observable<Livro[]> {
   return this.http.get<Livro[]>(this.linkApi1)
  }

  getLivrosEmprestados():Observable<Livro[]> {
   return this.http.get<Livro[]>(this.linkApi2)
  }
}
