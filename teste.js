const assert = require('assert');
const Bloco = require('./bloco');
const Blockchain = require('./blockchain');

const bloco = new Bloco(1, 'Entrega válida', '0');
assert.strictEqual(bloco.hash, bloco.calcularHash());
assert.throws(() => new Bloco(1, 'oi', '0'), /entre 3 e 80/);
assert.throws(() => new Bloco(1, 'a'.repeat(81), '0'), /entre 3 e 80/);
assert.throws(() => new Bloco('1', 'Dados válidos', '0'), /índice deve ser um número/);
assert.throws(() => new Bloco(1, 123, '0'), /dados devem ser uma string/);
assert.throws(() => new Bloco(1, 'Dados válidos', 0), /hash anterior deve ser uma string/);

const registro = new Blockchain();
registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Manaus: recebida');
assert.strictEqual(registro.cadeia.length, 3);
assert.strictEqual(registro.cadeia[1].hashAnterior, registro.cadeia[0].hash);
assert.strictEqual(registro.ehValida(), true);

registro.cadeia[1].dados = 'Entrega adulterada';
assert.strictEqual(registro.ehValida(), false);

console.log('Todos os testes passaram.');
