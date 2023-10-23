import fs from 'node:fs';
import ArquivoComponent from './ArquivoComponent.js';
const tipoArquivo = 'html';

export default class HtmlFolha extends ArquivoComponent {
  constructor() {
    super(tipoArquivo);
  }
    
  async carregar(localArquivo) {
    return fs.promises.readFile(localArquivo, 'utf-8')
      .then(arquivoProcessado => {
        const linhas = arquivoProcessado.match(/<tr\b[^>]*>[\s\S]*?<\/tr>/g);
        const saidaArquivo = linhas.map((row) => {
          const celulas = row.match(/<td\b[^>]*>([\s\S]*?)<\/td>/g);
          if (celulas) {
            const id = celulas[0].replace(/<[^>]*>/g, '').trim();
            const nome = celulas[1].replace(/<[^>]*>/g, '').trim();
            const estado = celulas[2].replace(/<[^>]*>/g, '').trim();
  
            return {
              ID: id,
              Nome: nome,
              Estado: estado,
            };
          }
        }).filter((row) => row !== undefined);
        return saidaArquivo;
      });
  };
}