import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  largura = 0

  abrirMenu() {
    if (this.largura < 1) {
      this.largura = 270
    }
  }
}
