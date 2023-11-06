function obtenerPuntosDeURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const puntosCorrectas = urlParams.get('correctas') || 0;
    const puntosIncorrectas = urlParams.get('incorrectas') || 0;

    return { correctas: parseInt(puntosCorrectas), incorrectas: parseInt(puntosIncorrectas) };
}
function mostrarPuntosEnPantalla() {
    const { correctas, incorrectas } = obtenerPuntosDeURL();

    const contadorCorrectasElement = document.getElementById('contadorCorrectas');
    const contadorIncorrectasElement = document.getElementById('contadorIncorrectas');

    if (contadorCorrectasElement !== null && contadorIncorrectasElement !== null) {
        contadorCorrectasElement.textContent = correctas;
        contadorIncorrectasElement.textContent = incorrectas;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarPuntosEnPantalla();
});
function volverAPantallaPrincipal() {
    window.location.href = '/index.html'; 
}
