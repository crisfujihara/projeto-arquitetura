import DecoradorFormatador from './DecoradorFormatador.js';

export default class DecoradorEstado extends DecoradorFormatador {
  constructor(formatador) {
    super();
    this._formatador = formatador;
  }

  formatar(cidades) {
    const html = this._formatador.formatar(cidades);
    const linhasHtml = html.split(/[\r\n]+/);
    linhasHtml.pop();
    const TAMANHO_TAG_FECHAMENTO = "</li>".length;

    const linhasHtmlComEstado = linhasHtml.map((linha, idx) => {
      return linha.slice(0, linha.length - TAMANHO_TAG_FECHAMENTO) + ` - ${cidades[idx].Estado}` + linha.slice(linha.length - TAMANHO_TAG_FECHAMENTO);
    });

    let htmlComEstado = "";
    linhasHtmlComEstado.forEach(linha => htmlComEstado += `${linha}\n`);

    return htmlComEstado;
  }
}