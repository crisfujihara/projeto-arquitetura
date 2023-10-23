import fs from 'node:fs';
import ArquivoComponent from './ArquivoComponent.js';
const tipoArquivo = 'csv';

export default class CsvFolha extends ArquivoComponent {
  constructor() {
    super(tipoArquivo);
  }
  
async carregar(localArquivo) {
    return fs.promises.readFile(localArquivo, 'utf-8')
      .then(arquivoProcessado => {
        const linhas = arquivoProcessado.split(/\r?\n/).filter(row => row.trim().length > 0);
        const cabeçalho = linhas.shift().split(',');
        const saidaArquivo = linhas.map(row => {
          const cidades = row.split(',');
          const cidadesFormatadas = {};
          for (let i = 0; i < cabeçalho.length; i++) {
            cidadesFormatadas[cabeçalho[i]] = cidades[i];
          }
          return cidadesFormatadas;
        });
        return saidaArquivo;
      });
  }
}