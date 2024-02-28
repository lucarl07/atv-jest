/* Função para converter bitcoin (BTC) para real brasileiro (BRL) */
function conversorDeBitcoin(bitcoin) {
  const real = bitcoin * 303503.9;
  return real;
}

module.exports = conversorDeBitcoin;
