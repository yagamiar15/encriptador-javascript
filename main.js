const btnEncriptar = document.querySelector('#btnEncriptar');

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

