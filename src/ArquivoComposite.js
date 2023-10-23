
import ArquivoComponent from "./ArquivoComponent.js";

export default class ArquivoComposite extends ArquivoComponent {
  constructor() {
    super();
    this.leitores = [];
  }

  addLeitor(leitor) {
    this.leitores.push(leitor);
  }

  async carregar(localArquivo) {
    const tipoArquivo = this.getTipoArquivo(localArquivo);
    const leitor = this.leitores.find(leitor => leitor.verificaExtensao(tipoArquivo));
    if (leitor) {
      const saidaArquivo = await leitor.carregar(localArquivo);
      return saidaArquivo;
    } else {
      throw new Error('Arquivo não suportado.');
    }
  }

  verificaExtensao(tipoArquivo) {
    return this.leitores.some(leitor => leitor.supportsFile(this.tipoArquivo));
  }

  getTipoArquivo(localArquivo) {
    const tipoArquivo = localArquivo.split('.').pop().toLowerCase();
    return tipoArquivo;
  }
}