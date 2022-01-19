export default class Updaters{
  statusDoJogador;
  linha;
  entrada;
  constructor(
    statusDoJogador,
    entrada,
  ){
    this.statusDoJogador = statusDoJogador;

    this.entrada = entrada;
  }

  jogada = [];

  updateStatus(melhorSequencia, sequencia){

    melhorSequencia.innerHTML = this.statusDoJogador.melhorSequencia;

    sequencia.innerHTML = this.statusDoJogador.sequencia;
  }

  colocaLetraNaCelula( letra, i, linha){
    if(letra == 'Backspace'){
      linha.children[i - 1].innerHTML = '';

    }else{
      this.entrada += letra.toUpperCase();
      
      linha.children[i].innerHTML = letra.toUpperCase();
    }
    return this.entrada;
  }

  computaPalavra(child, sts, linha){
    switch (sts){
      case 'erro':
        linha.children[child].style = 'background: #ca5035';
        this.jogada.push('&#x1F7E5');
        break;
      case 'certo':
        linha.children[child].style = 'background: #479a32';
        this.jogada.push('&#x1F7E9');
        break;
      default:
        linha.children[child].style = 'background: #adc00f';
        this.jogada.push('&#x1F7E8');
        break;
    }
  }

  getJogada(){
    return this.jogada;
  }

  desenhaQuadroNaVitoria(quadroNaVitoria, painelDoGanhou, tabela, matrizresultado){
    painelDoGanhou.parentNode.style="display:block";
    tabela.style="display:none";
    for(let k = 0; k < matrizresultado.length; k++){
      for(let h = 0; h < matrizresultado[k].length; h++){
        quadroNaVitoria += `${matrizresultado[k][h]}`;
      }
      quadroNaVitoria += `</br>`;
    }
    return quadroNaVitoria;
  }

}
