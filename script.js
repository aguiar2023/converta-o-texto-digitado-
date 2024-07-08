function converter() {
    var texto = document.getElementById('texto').value.toUpperCase();
    var resultado = document.getElementById('resultado');

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Converte cada letra em uma linha separada
    for (var i = 0; i < texto.length; i++) {
        resultado.innerHTML += texto[i] + "<br>";
    }
}
