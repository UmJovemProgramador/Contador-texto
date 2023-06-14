const textoInserido = document.getElementById('input');
const contarPalavras = document.getElementById('contarPalavras');
const contarCaracteres = document.getElementById('contarCaracteres');
const contarLinhas = document.getElementById('contarLinhas');

textoInserido.addEventListener('input', function() {
    const texto = textoInserido.value;

    // Contar palavras
    const palavras = texto.trim().split(/\s+/);
    contarPalavras.innerText = texto ? palavras.length : 0;

    // Contar caracteres
    contarCaracteres.innerText = texto ? texto.length : 0;

    // Contar linhas
    const linhas = texto.split('\n');
    contarLinhas.innerText = texto ? linhas.length : 0;
});
