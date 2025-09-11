function recomendar(genero) {
    let edad = parseInt(document.getElementById("edadInput").value);
    let recomendacionTexto = document.getElementById("recomendacion");

    if (!document.getElementById("edadInput").value) {
        alert("Por favor, ingresa tu edad antes de continuar.");
        return;
    }

    switch (genero) {
        case 'romanticas':
            if (edad < 13) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else if (edad <= 15) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            }

            break;
        case 'miedo':
            if (edad < 13) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else if (edad <= 15) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            }

            break;
        case 'detectives':
            if (edad < 13) {
                recomendacionTexto.textContent = "Tu película recomendada .";
            } else if (edad <= 15) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            }

            break;
        case 'accion':
            if (edad < 13) {
                recomendacionTexto.textContent = "No hay opciones para tu edad.";
            } else if (edad <= 15) {
                recomendacionTexto.textContent = "Tu película recomendada es .";
            } else {
                recomendacionTexto.textContent = "Tu película recomendada es T.";
            }

            break;
    }
}