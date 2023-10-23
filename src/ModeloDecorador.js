import DecoradorFormatador from './DecoradorFormatador.js';
export default class ModeloDecorador extends DecoradorFormatador {
  constructor(formatador) {
    super();
    this._formatador = formatador;
  }

  formatar(cidades) {
    const inicio = `<!DOCTYPE HTML>
<html>
<head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8" />
   <title>Relatório de Nomes de Cidades</title>
</head>
<body>
  <h1>Relatório de Nomes de Cidades</h1>
  <ul>\n`;
    const fim = `  </ul>
</body>
</html>`;

    return inicio + this._formatador.formatar(cidades) + fim;
  }
}
