import HtmlFolha from './src/HtmlFolha.js';
import CsvFolha from './src/CsvFolha.js';
import ArquivoComposite from './src/ArquivoComposite.js';
import HtmlFormatador from './src/HtmlFormatador.js';
import EstadosDecorador from './src/EstadosDecorador.js';
import ModeloDecorador from './src/ModeloDecorador.js';
import XmlFolha from './src/XmlFolha.js';
import YamlFolha from './src/YamlFolha.js';



const [cmd, script, localArquivo] = process.argv;
const formatadorDecorado = new ModeloDecorador(new EstadosDecorador(new HtmlFormatador()));
const composite = new ArquivoComposite();
const folhaCsv = new CsvFolha();
const folhaHtml = new HtmlFolha();
const folhaXml = new XmlFolha();
const folhaYaml = new YamlFolha();
composite.addLeitor(folhaHtml);
composite.addLeitor(folhaCsv);
composite.addLeitor(folhaXml);
composite.addLeitor(folhaYaml);



composite.carregar(localArquivo)
  .then(saidaArquivo => {
    console.log(formatadorDecorado.formatar(saidaArquivo));
  })
  .catch(error => {
    console.error( error);
});









