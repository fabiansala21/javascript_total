function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    if (!edad) {
        alert("Por favor, ingresa tu edad antes de continuar ");
        return;
    }

    switch (genero) {
        case 'accion':
            if (edad < 13) {
                recomendacion.textContent = "Los Increíbles";
            } else if (edad < 18) {
                recomendacion.textContent = "Spider-Man: No Way Home";
            } else {
                recomendacion.textContent = "John Wick 4";
            }
            break;

        case 'romance':
            if (edad < 13) {
                recomendacion.textContent = "Encantada";
            } else if (edad < 18) {
                recomendacion.textContent = "A Todos los Chicos de los que me Enamoré";
            } else {
                recomendacion.textContent = "Orgullo y Prejuicio";
            }
            break;

        case 'terror':
            if (edad < 13) {
                recomendacion.textContent = "Monster House";
            } else if (edad < 18) {
                recomendacion.textContent = "Un Lugar en Silencio";
            } else {
                recomendacion.textContent = "El Conjuro";
            }
            break;

        case 'animacion':
            if (edad < 13) {
                recomendacion.textContent = "Toy Story";
            } else if (edad < 18) {
                recomendacion.textContent = "Spider-Man: Into the Spider-Verse";
            } else {
                recomendacion.textContent = "Soul";
            }
            break;

        case 'ficcion':
            if (edad < 13) {
                recomendacion.textContent = "Wall-E";
            } else if (edad < 18) {
                recomendacion.textContent = "Ready Player One";
            } else {
                recomendacion.textContent = "Interestelar";
            }
            break;

        default:
            recomendacion.textContent = "Selecciona un género válido";
            break;
    }
}