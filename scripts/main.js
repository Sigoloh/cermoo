const tabela = document.getElementById('gameBoard').children[0].children;
let tentativa = 0;
const palavraDoDia = 'SARAR';
const matrizResultado = [];
function submit(){
  const entrada = document.getElementById('gameInput').value;
  const linha = tabela[tentativa];
  const jogada = [];
  for(let i = 0; i < 5; i++){
    if(palavraDoDia.indexOf(entrada[i].toUpperCase()) == -1){
      linha.children[i].innerHTML = entrada[i].toUpperCase();
      linha.children[i].style = 'background: red';
      jogada.push('&#x1F7E5');
    } else if(palavraDoDia.indexOf(entrada[i].toUpperCase()) == entrada.indexOf(entrada[i])){
      linha.children[i].innerHTML = entrada[i].toUpperCase();
      linha.children[i].style = 'background: green';
      jogada.push('&#x1F7E9');
    } else{
      linha.children[i].innerHTML = entrada[i].toUpperCase();
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
    painelDoGanhou.innerHTML += `<a href="https://twitter.com/intent/tweet?text=${quadro}" class="twitter-share-button" data-text="${quadro}" data-url="http://sigolo.me" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`
  }
  tentativa++;
}
