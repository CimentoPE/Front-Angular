import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojicategoria',
  standalone: false
})
export class EmojicategoriaPipe implements PipeTransform {

  transform(value: string): string {
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
