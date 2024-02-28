/* eslint-disable no-undef */
const conversorDeTemperatura = require('../index');

describe('Testa a função conversorDeTemperatura()', () => {
  test('Verifica se 30 °C é igual a 86 °F', () => {
    const tempCelsius = 30;
    const tempFahrenheit = conversorDeTemperatura(tempCelsius);
    expect(tempFahrenheit).toBe(86);
  });
});
