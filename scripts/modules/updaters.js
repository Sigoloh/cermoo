export default class Updaters {
  statusDoJogador;

  linha;

  entrada;

  constructor(
    statusDoJogador,
    entrada,
  ) {
    this.statusDoJogador = statusDoJogador;

    this.entrada = entrada;
  }

  jogada = [];

  updateStatus(melhorSequencia, sequencia) {
    const quadroSequencia = melhorSequencia;

    quadroSequencia.innerHTML = this.statusDoJogador.melhorSequencia;

    const valorSequencia = sequencia;

    valorSequencia.innerHTML = this.statusDoJogador.sequencia;
  }

  colocaLetraNaCelula(letra, i, linha) {
    const quadroLinha = linha;

    if (letra === 'Backspace') {
      quadroLinha.children[i - 1].innerHTML = '';
    } else {
      this.entrada += letra.toUpperCase();

      quadroLinha.children[i].innerHTML = letra.toUpperCase();
    }
    return this.entrada;
  }

  computaPalavra(child, sts, linha) {
    const quadroLinhaNova = linha;

    switch (sts) {
      case 'erro':
        quadroLinhaNova.children[child].style = 'background: #ca5035';

        this.jogada.push('&#x1F7E5');

        break;
      case 'certo':
        quadroLinhaNova.children[child].style = 'background: #479a32';

        this.jogada.push('&#x1F7E9');

        break;
      default:
        quadroLinhaNova.children[child].style = 'background: #adc00f';

        this.jogada.push('&#x1F7E8');

        break;
    }
  }

  getJogada() {
    return this.jogada;
  }

  desenhaQuadroNaVitoria(quadroNaVitoria, painelDoGanhou, tabela, matrizresultado) {
    const quadroPainelGanhou = painelDoGanhou;

    const tabelaDoQuadroDoPainelDoGanhou = tabela;

    let novoQuadroNaVitoria = quadroNaVitoria;

    quadroPainelGanhou.parentNode.style = 'display:block';

    tabelaDoQuadroDoPainelDoGanhou.style = 'display:none';

    for (let k = 0; k < matrizresultado.length; k += 1) {
      for (let h = 0; h < matrizresultado[k].length; h += 1) {
        novoQuadroNaVitoria += `${matrizresultado[k][h]}`;
      }

      novoQuadroNaVitoria += '</br>';
    }

    return novoQuadroNaVitoria;
  }
}
