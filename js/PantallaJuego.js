let preguntaAleatoria; 
let contadorRespuestasCorrectas = 0; 
let contadorRespuestasIncorrectas = 0; 


async function obtenerPreguntaAleatoria() {
    try {
        if (contadorRespuestasCorrectas + contadorRespuestasIncorrectas >= 5) {

            window.location.href = 'PantallaPuntos.html?correctas=' + contadorRespuestasCorrectas + '&incorrectas=' + contadorRespuestasIncorrectas;
            return;
        }

        const response = await fetch('http://localhost:4000');
        const data = await response.json();
        preguntaAleatoria = data[Math.floor(Math.random() * data.length)];

        document.getElementById('pregunta').textContent = 'Pregunta:';
        document.getElementById('enunciado').textContent = preguntaAleatoria.acertijo;
        document.getElementById('opcion1').textContent = preguntaAleatoria.opciones.A;
        document.getElementById('opcion2').textContent = preguntaAleatoria.opciones.B;
        document.getElementById('opcion3').textContent = preguntaAleatoria.opciones.C;
        document.getElementById('opcion4').textContent = preguntaAleatoria.opciones.D;
    } catch (error) {
        console.error('Error al obtener la pregunta:', error);
    }
}


function verificarRespuesta(opcion) {
    const respuestaSeleccionada = document.getElementById(`opcion${opcion}`).textContent;
    const respuestaCorrecta = preguntaAleatoria.opciones[preguntaAleatoria.respuesta_correcta];

    if (respuestaSeleccionada === respuestaCorrecta) {
        contadorRespuestasCorrectas++;
        document.getElementById('contadorCorrectas').textContent = contadorRespuestasCorrectas;
    } else {
        contadorRespuestasIncorrectas++;
        document.getElementById('contadorIncorrectas').textContent = contadorRespuestasIncorrectas;
    }

    localStorage.setItem('puntosCorrectas', contadorRespuestasCorrectas);
    localStorage.setItem('puntosIncorrectas', contadorRespuestasIncorrectas);


    obtenerPreguntaAleatoria();
}


window.onload = obtenerPreguntaAleatoria;
