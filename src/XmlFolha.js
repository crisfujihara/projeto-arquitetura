import fs from 'node:fs';
import ArquivoComponent from './ArquivoComponent.js';
const tipoArquivo = 'xml';

export default class XmlFolha extends ArquivoComponent {
  constructor() {
    super(tipoArquivo);
  }

async carregar(localArquivo) {
  return fs.promises.readFile(localArquivo, 'utf-8')
    .then(dadosXml => {
      const linhas = dadosXml.split('<row>');
      linhas.shift();
      const saidaArquivo = linhas.map((linha) => {
        const id = /<ID>(.*?)<\/ID>/.exec(linha);
        const nome = /<Nome>(.*?)<\/Nome>/.exec(linha);
        const estado = /<Estado>(.*?)<\/Estado>/.exec(linha);
        if (id && nome && estado) {
          return {
            ID: id[1],
            Nome: nome[1],
            Estado: estado[1],
          };
        }
        return null;
      }).filter((linha) => linha !== null);
      return saidaArquivo;
    });
  }
}