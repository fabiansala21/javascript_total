let calificaciones = [75, 48, 92, 88, 67];

function mostrarNotas() {
    let lista = document.getElementById("listaCalificaciones");
    for (let nota of calificaciones) {
        let item = document.createElement("li");
        item.textContent = nota;
        lista.appendChild(item);
    }
}

function promedioFinal() {
    let resultado = document.getElementById("resultadoPromedio");
    let total = 0;
    for (let n of calificaciones) {
        total += n;
    }
    resultado.textContent = (total / calificaciones.length).toFixed(2);
}

function notaMayor() {
    let resultadoAlta = document.getElementById("resultadoAlta");
    let max = 0;
    for (let n of calificaciones) {
        if (n > max) {
            max = n;
        }
    }
    resultadoAlta.textContent = max;
}

function revisarReprobados() {
    let salida = document.getElementById("resultadoReprobados");
    for (let n of calificaciones) {
        if (n < 60) {
            salida.textContent = "Sí";
            return;
        } else {
            salida.textContent = "No";
        }
    }
}
