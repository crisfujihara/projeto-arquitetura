import InterfaceFormatador from './InterfaceFormatador.js';

export default class DecoradorFormatador extends InterfaceFormatador {
  constructor(formatador) {
    super();
    this._formatador = formatador;
  }

  formatar(cidades) {
    return this._formatador.formatar(cidades)
  }
}
