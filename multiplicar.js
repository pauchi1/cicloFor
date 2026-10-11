function generarTablas() {
    let numero = Number(document.getElementById("txtNumero").value);
    let contenido = "";
    let contenedor = document.getElementById("mensaje");

    if (isNaN(numero) || numero <= 0) {
        contenedor.innerHTML = "<p style='color: red;'>Por favor, ingresa un número válido.</p>";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        contenido = contenido + `<div class="fila"><span>` + numero + ` × ` + i + `</span><span class="resultado">` + resultado + `</span></div>`;
    }

    contenedor.innerHTML = contenido;
}
