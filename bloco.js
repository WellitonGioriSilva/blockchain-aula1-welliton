const crypto = require('crypto');

class Bloco {
  constructor(indice, dados, hashAnterior) {
    if (typeof indice !== 'number' || !Number.isFinite(indice)) {
      throw new Error('O índice deve ser um número.');
    }
    if (typeof dados !== 'string') {
      throw new Error('Os dados devem ser uma string.');
    }
    if (dados.length < 3 || dados.length > 80) {
      throw new Error('Os dados devem ter entre 3 e 80 caracteres.');
    }
    if (typeof hashAnterior !== 'string') {
      throw new Error('O hash anterior deve ser uma string.');
    }

    this.indice = indice;
    this.dados = dados;
    this.hashAnterior = hashAnterior;
    this.hash = this.calcularHash();
  }

  calcularHash() {
    const texto = `${this.indice}${this.dados}${this.hashAnterior}`;
    return crypto.createHash('sha256').update(texto).digest('hex');
  }
}

module.exports = Bloco;
