const texto = document.getElementById('input');
const contarPalavras = document.getElementById('contarPalavras');
const contarCaracteres = document.getElementById('contarCaracteres');

texto.addEventListener('input', function()  {
    const text = texto.value;

    //Contar palavras
    const palavras = text.trim().split(/\s+/);
    contarPalavras.innerText = palavras.length;

    //Contar caracteres
    
    contarCaracteres.innerText = text.length;

})
