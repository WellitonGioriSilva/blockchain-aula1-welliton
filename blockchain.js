const Bloco = require('./bloco');

class Blockchain {
  constructor() {
    this.cadeia = [new Bloco(0, 'Bloco gênese', '0')];
  }

  adicionar(dados) {
    const anterior = this.cadeia[this.cadeia.length - 1];
    this.cadeia.push(new Bloco(this.cadeia.length, dados, anterior.hash));
  }

  ehValida() {
    for (let i = 1; i < this.cadeia.length; i++) {
      const atual = this.cadeia[i];
      const anterior = this.cadeia[i - 1];

      if (atual.hash !== atual.calcularHash() || atual.hashAnterior !== anterior.hash) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Blockchain;
