import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AcervoLivrosComponent } from './paginas/acervo-livros/acervo-livros.component';
import { InfoLivrosComponent } from './paginas/info-livros/info-livros.component';
import { ListaLivrosComponent } from './paginas/lista-livros/lista-livros.component';
import { provideHttpClient } from '@angular/common/http';
import { EmojicategoriaPipe } from './pipes/emojicategoria.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcervoLivrosComponent,
    InfoLivrosComponent,
    ListaLivrosComponent,
    EmojicategoriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
