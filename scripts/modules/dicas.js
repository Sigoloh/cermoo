class Dicas {
  podePedirDicas;

  constructor() {
    this.podePedirDicas = JSON.parse(localStorage.getItem('statusDoJogador')).sequencia % 5 === 0;
  }

  async pedirDica(palavra) {
    if (this.podePedirDicas) {
      const respostaDoDicionario = await (
        await fetch(`https://api.dicionario-aberto.net/word/${palavra}`)
      ).json();
      const definicao = respostaDoDicionario[0] !== undefined
        ? respostaDoDicionario[0].xml.split('<def>')[1].split('</def>')[0].replace('\n', '').replace(/_/gm, ' ')
        : 'Ainda não temos dica para esta palavra';
      return definicao;
    }
    return 'Você só pode pedir dicas de 5 em 5 jogadas acertadas';
  }
}
