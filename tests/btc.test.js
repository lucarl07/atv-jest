/* eslint-disable no-undef */
const conversorDeBitcoin = require('../js/btc');

test('Verificar se 1 BTC = 303.503,90 BRL', () => {
  const valorBTC = 1;
  const valorBRL = conversorDeBitcoin(valorBTC);
  expect(valorBRL).toBe(303503.9);
});
