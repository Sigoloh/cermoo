const tabela = document.getElementById('gameBoard').children[0].children;

if (!localStorage.getItem('statusDoJogador')) {
  localStorage.setItem(
    'statusDoJogador',
    JSON.stringify(
      {
        sequencia: 0,
        melhorSequencia: 0,
      },
    ),
  );
}

const statusDoJogador = JSON.parse(localStorage.getItem('statusDoJogador'));

let tentativa = 0;

const entrada = '';

const updaters = new Updaters(
  statusDoJogador,
  entrada,
);

updaters.updateStatus(
  document.getElementById('melhorSequencia'),
  document.getElementById('sequencia'),
);

const palavraDoDia = set[parseInt(Math.random() * 462 + 1, 10)].toUpperCase();

//document.getElementById('resposta').innerHTML = palavraDoDia;

const matrizResultado = [];

function submit() {
  for (let i = 0; i < 5; i += 1) {
    if (updaters.entrada[i] === palavraDoDia[i]) {
      updaters.computaPalavra(i, 'certo', tabela[tentativa]);
    } else if (palavraDoDia.indexOf(updaters.entrada[i]) === -1) {
      updaters.computaPalavra(i, 'erro', tabela[tentativa]);
    } else {
      updaters.computaPalavra(i, 'erroNaPosicao', tabela[tentativa]);
    }
  }

  matrizResultado.push(updaters.getJogada());
  const ganhou = updaters.entrada.toUpperCase() === palavraDoDia.toUpperCase();

  let quadro = '';

  const mensagem = document.getElementById('mensagem');
  const painelDoGanhou = document.getElementById('painel');
  const tabelaDoJogo = document.getElementById('gameBoard');
  if (ganhou) {
    quadro = updaters.desenhaQuadroNaVitoria(quadro, mensagem, tabelaDoJogo, matrizResultado);

    statusDoJogador.sequencia += 1;
    mensagem.innerHTML += '<span> Você ganhou </span>';
    mensagem.innerHTML += `<div class="tentativas"><p>Resumo das suas tentativas</p>${quadro}</div>`;
  }
  if (ganhou || tentativa === 5) {
    const links = document.getElementById('links');
    quadro = quadro.replace(/<\/br>/gm, '%0A');
    links.innerHTML += `<a href="https://twitter.com/intent/tweet?text=${quadro}" class="twitter-share-button" data-text="${quadro}" data-url="http://sigolo.me" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> <br/> <a href="/cermoo/cermoo.html">Jogar Novamente</a>`;
  }
  if (!ganhou && tentativa + 1 > 5) {
    statusDoJogador.melhorSequencia = statusDoJogador.sequencia > statusDoJogador.melhorSequencia
      ? statusDoJogador.sequencia
      : statusDoJogador.melhorSequencia;
    statusDoJogador.sequencia = 0;
    tabelaDoJogo.style = 'display:none';
    painelDoGanhou.style = 'display:block';
    mensagem.innerHTML += '<span> Você perdeu </span>';
    mensagem.innerHTML += `<p>A palavra era ${palavraDoDia}</p>`;
  }
  localStorage.setItem('statusDoJogador', JSON.stringify(statusDoJogador));
  updaters.updateStatus(
    document.getElementById('melhorSequencia'),
    document.getElementById('sequencia'),
  );
  updaters.jogada = [];
  tentativa += 1;
}

let posicaoLetra = 0;

function setEntrada() {
  let palavra = document.getElementById('mobileInput').value;
  for (let i = 0; i < 5; i += 1) {
    updaters.entrada = updaters.colocaLetraNaCelula(palavra[i], i, tabela[tentativa]);
  }
  submit(updaters.entrada);
  palavra = '';
  updaters.entrada = '';
}

document.addEventListener('keydown', (event) => {
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if (event.key === 'Enter') {
    submit(entrada);
    updaters.entrada = '';
    posicaoLetra = 0;
  } else if (event.key === 'Backspace' && updaters.entrada.length !== 0) {
    updaters.entrada = updaters.colocaLetraNaCelula(event.key, posicaoLetra, tabela[tentativa]);
    updaters.entrada = updaters.entrada.substring(0, updaters.entrada.length - 1);
    posicaoLetra -= 1;
  } else if (letras.indexOf(event.key) !== -1 && updaters.entrada.length !== 5) {
    updaters.entrada = updaters.colocaLetraNaCelula(event.key, posicaoLetra, tabela[tentativa]);
    posicaoLetra += 1;
  }
});
