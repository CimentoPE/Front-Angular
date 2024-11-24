Com essas informações, aqui está uma proposta para o seu README:

---

# Biblioteca de Livros 📚  
Um projeto em Angular que utiliza uma API de livros para listar, visualizar detalhes e gerenciar livros capturados para leitura.

## 🎯 Funcionalidades  
- **Biblioteca**: Visualize uma lista de livros disponíveis.  
- **Detalhes do Livro**: Veja informações detalhadas sobre o livro e seu autor.  
- **Livros Capturados**: Gerencie e visualize os livros que você marcou para leitura.

## 🛠️ Tecnologias Utilizadas  
- **Frontend**: Angular  
- **Estilização**: [Bootstrap/Tailwind/etc.]  
- **API**: Integração com API pública de livros usando o HttpClient.  

## ⚙️ Requisitos Atendidos  
- **Rotas Angular**: Implementação de três páginas com rotas funcionais.  
- **HttpClient**: Comunicação com a API para listar e detalhar livros.  
- **Pipes**: Uso de pipes personalizados e estruturais.  
- **Services**: Dois serviços para gerenciar dados e lógica.  
- **Diretivas**:  
  - Personalizadas: [Descreva suas diretivas].  
  - Estruturais: `ngIf` e `ngFor`.

## 🚀 Como Executar  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```  
2. Instale as dependências:  
   ```bash
   npm install
   ```  
3. Inicie o servidor de desenvolvimento:  
   ```bash
   ng serve -O
   ```  
4. Acesse no navegador:  
   ```
   http://localhost:4200
   ```

## 📁 Estrutura do Projeto  
```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   ├── paginas/
│   │   ├── acervo-livros/
│   │   ├── info-livros/
│   │   ├── lista-livros/
│   ├── services/
│   │   ├── livro.service.ts
│   │   ├── usuario.service.ts
│   ├── pipes/
│   │   ├── [nome-do-pipe].pipe.ts
│   │   ├── [nome-do-pipe-personalizado].pipe.ts
│   ├── directives/
│   │   ├── [diretiva-personalizada].directive.ts
│   │   ├── [diretiva-personalizada2].directive.ts
```

## 👨‍💻 Equipe  
- **Rafel de Castro**: Gerente de projeto  
- **Samuel Levi**: Dev
- **Raí Guilherme**: Dev
- **Paulo Mateus**: Documentador  

---

Tutorial do angular/cli:
- **Criar componentes/paginas:** ng g c nomedapasta/nomedocomponente
- **Criar serviços:** ng g s nomedapasta/nomedpservico
- **Rodar o site:** ng s -o