/* const btnEncriptar = document.querySelector('#btnEncriptar');

const btnDesencriptar = document.querySelector('#btnDesencriptar');

let divResultado = document.querySelector('#resultado');

let botonCopiar;

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);


function leerTexto () {
    const texto = document.querySelector('#textoIngresado');
    if (texto.value == 0) {
        alert('Ingrese un texto');  
    } else { 
    return texto.value.toLowerCase(); 
    }
}

function encriptar(e) {
    e.preventDefault();
    limpiarHTML();

    let textoEncriptar = leerTexto();

    let mostrarEncriptado = encriptacion(textoEncriptar);

    document.querySelector('#textoDevuelto').value = mostrarEncriptado;
    crearBotonCopiar();

}

function desencriptar(e) {
    e.preventDefault();
    limpiarHTML();

    let textoDesencriptar = leerTexto();
    
    let mostrarDesencriptado = desencriptacion(textoDesencriptar);

    document.querySelector('#textoDevuelto').value = mostrarDesencriptado;
    crearBotonCopiar();
}

function crearBotonCopiar() {
    botonCopiar = document.createElement('button');

    botonCopiar.innerHTML = 'Copiar';

    divResultado.appendChild(botonCopiar);
    
    botonCopiar.addEventListener('click', copiarTexto);
}

function copiarTexto(e) {
    e.preventDefault();
    const textoDevuelto = document.querySelector('#textoDevuelto');
    textoDevuelto.select();
    navigator.clipboard.writeText(textoDevuelto.value);
}

function limpiarHTML() {
    while (divResultado.lastChild == botonCopiar) {

        divResultado.removeChild(botonCopiar);
    }
}

 */

function botonEncriptar(){
    const encriptar = document.getElementById('textoAEncriptar').value;
    const encriptado = encriptar.replace(/(e)/gi, 'enter').replace(/(i)/gi, 'imes').replace(/(a)/gi, 'ai').replace(/(o)/gi, 'ober').replace(/(u)/gi, 'ufat');
    document.getElementById("textoEncriptado").value = encriptado
    document.getElementById("textoAEncriptar").value=" ";
    // cambiarMensajeResultado();
}

var button = document.getElementById("btnEncriptar");
button.onclick = botonEncriptar;

function botonDesencriptar(){
    const desencriptar = document.getElementById('textoAEncriptar').value;
    const desencriptado = desencriptar.replace(/(enter)/gi, 'e').replace(/(imes)/gi, 'i').replace(/(ai)/gi, 'a').replace(/(ober)/gi, 'o').replace(/(ufat)/gi, 'u');
    document.getElementById("textoEncriptado").value = desencriptado;
    document.getElementById("textoAEncriptar").value;
}

var button2 = document.getElementById("btnDesencriptar");
button2.onclick = botonDesencriptar;