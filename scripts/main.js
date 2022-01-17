const tabela = document.getElementById('gameBoard').children[0].children;
let tentativa = 0;
const palavraDoDia = 'SARAR';
function submit(){
  const entrada = document.getElementById('gameInput').value;
  const linha = tabela[tentativa];

  for(let i = 0; i < 5; i++){
    if(palavraDoDia.indexOf(entrada[i].toUpperCase()) == -1){
      linha.children[i].innerHTML = entrada[i].toUpperCase();
      linha.children[i].style = 'background: red';
    } else if(palavraDoDia.indexOf(entrada[i].toUpperCase()) == entrada.indexOf(entrada[i])){
      linha.children[i].innerHTML = entrada[i].toUpperCase();
      linha.children[i].style = 'background: green';
    } else{
      linha.children[i].innerHTML = entrada[i].toUpperCase();
      linha.children[i].style = 'background: yellow';
    }
    //linha.children[i].innerHTML = entrada[i];
  }
  tentativa++;
}
