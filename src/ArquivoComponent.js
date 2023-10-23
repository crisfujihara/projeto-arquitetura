export default class ArquivoComponent {

  constructor(tipoArquivo) {
    this.tipoArquivo = tipoArquivo; 
  }

  async carregar(localArquivo) {
    throw new Error('Nenhum metodo implementado.');
  }

  getTipoArquivo(localArquivo) {
    const extension = filePath.split('.').pop().toLowerCase();
    return extension;
  }

  verificaExtensao(tipoArquivo) {
    return tipoArquivo === this.tipoArquivo;
  }
}