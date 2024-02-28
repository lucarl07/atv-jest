/* Função para converter temperaturas Celsius (°C) em Fahrenheit (°F) */
function conversorDeTemperatura(celsius) {
  const fahrenheit = (celsius * (9 / 5)) + 32;
  return fahrenheit;
}

module.exports = conversorDeTemperatura;
