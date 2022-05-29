function encriptacion(texto) {
    let textoIngresado = texto.split('');
    for (let i = 0; i < textoIngresado.length; i++) {
        if (textoIngresado[i] == 'a') {
            textoIngresado[i] = 'ai';
        } else if (textoIngresado[i] == 'e') {
            textoIngresado[i] = 'enter';
        } else if (textoIngresado[i] == 'i') {
            textoIngresado[i] = 'imes';
        } else if (textoIngresado[i] == 'o') {
            textoIngresado[i] = 'ober';
        } else if (textoIngresado[i] == 'u') {
            textoIngresado[i] = 'ufat';
        }
}
    return textoIngresado.join('');
}

// Diferente metodo para realizar la misma tarea

function desencriptacion (texto) {
    let mensaje = texto
    let reemplazo1 = mensaje.replaceAll("enter", "e");
    let reemplazo2 = reemplazo1.replaceAll("imes", "i");
    let reemplazo3 = reemplazo2.replaceAll("ai", "a");
    let reemplazo4 = reemplazo3.replaceAll("ufat", "u");
    let reemplazo5 = reemplazo4.replaceAll("ober", "o");

    texto = reemplazo5;

    return texto;
}

