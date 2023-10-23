import fs from 'node:fs';
import ArquivoComponent from './ArquivoComponent.js';
const tipoArquivo = 'yaml';

export default class YamlFolha extends ArquivoComponent {
  constructor() {
    super(tipoArquivo);
  }
  
async carregar(localArquivo) {
  return fs.promises.readFile(localArquivo, 'utf-8')
    .then(arquivoProcessado => {
      const rows = arquivoProcessado.split('\n').filter(row => row.trim().length > 0);
      const saidaArquivo = [];
      for (let i = 0; i < rows.length; i += 3) {
        const id = /ID:\s*'(\d+)'/.exec(rows[i]);
        const nome = /Nome:\s*(.+)/.exec(rows[i + 1]);
        const estado = /Estado:\s*'(\d+)'/.exec(rows[i + 2]);
        if (id && nome && estado) {
          const dados = {
            ID: id[1],
            Nome: nome[1],
            Estado: estado[1],
          };
          saidaArquivo.push(dados);
        }
      }
      console.log('Saida JSON:', saidaArquivo);
      return saidaArquivo;
    });
  }
}