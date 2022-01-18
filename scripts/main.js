const tabela = document.getElementById('gameBoard').children[0].children;
import set from './palavras.js';

if(!localStorage.getItem('statusDoJogador')){
  localStorage.setItem('statusDoJogador',
    JSON.stringify(
      {
        sequencia: 0,
        melhorSequencia: 0,
      }
    )
  );
}

const statusDoJogador = JSON.parse(localStorage.getItem('statusDoJogador'));

function updateStatus(){
  const melhorSequencia = document.getElementById('melhorSequencia');
  const sequencia = document.getElementById('sequencia');
  melhorSequencia.innerHTML = statusDoJogador.melhorSequencia;
  sequencia.innerHTML = statusDoJogador.sequencia;
}

updateStatus();
let tentativa = 0;

const palavraDoDia = set[parseInt(Math.random()*462 + 1)].toUpperCase();
console.log(palavraDoDia);

const matrizResultado = [];
let entrada = '';
function colocaLetraNaCelula(letra, i){
  const linha = tabela[tentativa];
  if(letra == 'Backspace'){
    linha.children[i - 1].innerHTML = '';
  }else{
    entrada += letra.toUpperCase();
    linha.children[i].innerHTML = letra.toUpperCase();
  }
}
function submit(entrada){
  const linha = tabela[tentativa];

  const jogada = [];

  for(let i = 0; i < entrada.length; i++){
    if(entrada[i] === palavraDoDia[i]){
      linha.children[i].style = 'background: green';
      jogada.push('&#x1F7E9');
    } else if(palavraDoDia.indexOf(entrada[i]) == -1){
      linha.children[i].style = 'background: red'; 
      jogada.push('&#x1F7E5');
    } else {
      linha.children[i].style = 'background: yellow'; 
      jogada.push('&#x1F7E8');
    }
  }

  matrizResultado.push(jogada);  

  const ganhou = entrada.toUpperCase() === palavraDoDia.toUpperCase();

  let quadro = '';

  const painelDoGanhou = document.getElementById('painel');
  if(ganhou){
    const tabela = document.getElementById('gameBoard');
    painelDoGanhou.style="display:block";
    tabela.style="display:none";
    for(let k = 0; k < matrizResultado.length; k++){
      for(let h = 0; h < matrizResultado[k].length; h++){
        quadro += `${matrizResultado[k][h]}`;
      }
      quadro += `</br>`;
    }
    painelDoGanhou.innerHTML += quadro;
  }
  if(ganhou || tentativa == 5){
    quadro = quadro.replace(/<\/br>/gm, '%0A');
    painelDoGanhou.innerHTML += `<a href="https://twitter.com/intent/tweet?text=${quadro}" class="twitter-share-button" data-text="${quadro}" data-url="http://sigolo.me" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> <br/> <a href="/">Jogar Novamente</a>`
    statusDoJogador.sequencia += 1;
    console.log(statusDoJogador);
  }
  if(tentativa + 1 > 5){
    statusDoJogador.melhorSequencia =
      statusDoJogador.sequencia > statusDoJogador.melhorSequencia ? 
      statusDoJogador.sequencia :
      statusDoJogador.melhorSequencia
    statusDoJogador.sequencia = 0;
    const tabela = document.getElementById('gameBoard');
    tabela.style="display:none"; 
    painelDoGanhou.style="display:block";
    painelDoGanhou.innerHTML +="<h1> Você Perderu </h1>"; 
    console.log(statusDoJogador);
  }
  localStorage.setItem('statusDoJogador', JSON.stringify(statusDoJogador));
  updateStatus();
  tentativa++;
}

let posicaoLetra = 0
document.addEventListener('keydown', (event) => {
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if(event.key === 'Enter'){
    submit(entrada);
    entrada = '';
    posicaoLetra = 0;
  }else if(event.key == 'Backspace'){
    colocaLetraNaCelula(event.key, posicaoLetra);
    entrada = entrada.substring(0, entrada.length - 1);
    posicaoLetra--;
  } else if(letras.indexOf(event.key) != -1){
    colocaLetraNaCelula(event.key, posicaoLetra);
    posicaoLetra++;

  }
})
