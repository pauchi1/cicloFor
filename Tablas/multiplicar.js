function generarTablas() {
    let contenido = "";
    let contenedor = document.getElementById("mensaje");
    for (let i = 1; i <= 10; i++) {
        let resultado = 3 * i;
        contenido = contenido + `<div class="fila"><span>3 × ` + i + `</span><span class="resultado">` + resultado + `</span></div>`;
    }
    contenedor.innerHTML = contenido;
}

function generarTablas() {
    let contenido = "";
    let contenedor = document.getElementById("mensaje");
    for (let i = 1; i <= 10; i++) {
        let resultado = 5 * i;
        contenido = contenido + `<div class="fila"><span>3 × ` + i + `</span><span class="resultado">` + resultado + `</span></div>`;
    }
    contenedor.innerHTML = contenido;
}