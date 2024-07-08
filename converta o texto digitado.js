// Função para converter texto para maiúsculas (uma letra por linha)
function converterParaMaiusculas(texto) {
  // Dividir o texto em letras individuais
  const letras = texto.split('');

  // Converter cada letra para maiúscula e armazenar em um novo array
  const letrasMaiusculas = letras.map(letra => letra.toUpperCase());

  // Juntar as letras maiúsculas em uma string com quebra de linha
  const textoMaiusculo = letrasMaiusculas.join('\n');

  // Retornar o texto maiúsculo
  return textoMaiusculo;
}

// Solicitar ao usuário uma palavra
const palavra = prompt('Digite uma palavra:');

// Converter a palavra para maiúsculas
const textoMaiusculo = converterParaMaiusculas(palavra);

// Exibir o texto maiúsculo
console.log(textoMaiusculo);
