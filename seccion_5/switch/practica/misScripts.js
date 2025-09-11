function consultarPrecio() {
    let elementoRespuesta = document.getElementById("textoPrecio");
 
    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;
 
    switch (fruta){
        case "1":
            elementoRespuesta.textContent = "$15";
            break;
        case "2":
            elementoRespuesta.textContent = "$20";
            break;
        case "3":
            elementoRespuesta.textContent = "$25";
            break;
       
    }
}