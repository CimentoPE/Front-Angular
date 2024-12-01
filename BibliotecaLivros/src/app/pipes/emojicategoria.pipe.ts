import { Pipe, PipeTransform } from '@angular/core';
import { PipecontrolService } from '../services/pipecontrol.service';

@Pipe({
  name: 'emojicategoria',
  standalone: false,
  pure: false
})
export class EmojicategoriaPipe implements PipeTransform {
  constructor(private pipeControlService: PipecontrolService) {}

  transform(value: string): string {
    if(!this.pipeControlService.isPipeEnabled){
      return value;
    }else{

      const emojiMap: { [key: string]: string } = {
        'Ficção Científica': '🛸',
        'Terror': '👻',
        'Romance': '💖',
        'Aventura': '🏕️',
        'Fantasia': '🧙‍♂️',
        'História': '📜',
        'Não-Ficção': '📜',
        'Biografia': '👤',
        'Suspense': '🔍',
        'Comédia': '😂',
        'Drama': '🎭',
      };
  
      const emoji = emojiMap[value] || '📚'; // Emoji padrão para categorias desconhecidas
      return `${emoji} ${value}`;
    }
  }



}
