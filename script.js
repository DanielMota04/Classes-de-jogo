class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'não possui ataque definido';
      }
      const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
      this.exibirMensagem(mensagem);
      return mensagem;
    }
  
    exibirMensagem(mensagem) {
      const outputDiv = document.getElementById('output');
      const paragraph = document.createElement('p');
      paragraph.textContent = mensagem;
      outputDiv.appendChild(paragraph);
    }
  }
  
  function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;
  
    const heroi = new Heroi(nome, idade, tipo);
    heroi.atacar();
  }
  