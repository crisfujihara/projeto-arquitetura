import InterfaceFormatador from './InterfaceFormatador.js';

export default class HtmlFormatador extends InterfaceFormatador {
  formatar (cidades) {
    let html = "";
    cidades.forEach(cidade => html += `    <li>${cidade.Nome}</li>\n`)
    return html;
  }
}
