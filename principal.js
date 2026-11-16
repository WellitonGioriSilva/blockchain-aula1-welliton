const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
  for (const bloco of cadeia) {
    console.log(`Índice: ${bloco.indice}`);
    console.log(`Dados: ${bloco.dados}`);
    console.log(`Hash: ${bloco.hash.slice(0, 10)}...`);
    console.log('---');
  }
}

const registro = new Blockchain();
registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Manaus: recebida');
registro.adicionar('Entrega E-003 para Belém: aguardando coleta');

imprimirCadeia(registro.cadeia);
console.log(`Cadeia válida: ${registro.ehValida()}`);

try {
  registro.adicionar('oi');
} catch (erro) {
  console.log(`Erro ao cadastrar entrega: ${erro.message}`);
}

registro.cadeia[1].dados = 'Entrega E-001 adulterada';
console.log(`Cadeia válida após adulteração: ${registro.ehValida()}`);

module.exports = { imprimirCadeia };
