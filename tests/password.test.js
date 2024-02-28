/* eslint-disable no-undef */
const comparaSenhas = require('../js/password');

test('Verificar se 1234XYZ é diferente de 1234ABC', () => {
  const senha01 = '1234XYZ';
  const senha02 = '1234ABC';
  const resultado = comparaSenhas(senha01, senha02);
  expect(resultado).toBe('As senhas são diferentes.');
});
