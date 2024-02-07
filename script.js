const mensajeEncriptado = document.getElementById("msg");
const mensajeDecriptado = document.getElementById("input-texto");


/* Reglas de encriptación: 
"e" es convertido para "enter"   
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function encriptar() {
    const texto = document.getElementById('input-texto').value;
    const textoEncriptado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    mensajeEncriptado.value = textoEncriptado;
}

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
*/

function decriptar() {
    const textoEncriptado = document.getElementById('msg').value;
    const mensaje = textoEncriptado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    mensajeDecriptado.value = mensaje;
}

/*
Solo letras minusculas*/

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    mensajeDecriptado.value = mensajeDecriptado.value.toLowerCase();
});

mensajeDecriptado.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});



/*No se permite acentuación de palabras   
*/

function aceptarPalabrasConTildeYNumeros(palabra) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ0-9!@#]+$/;
    return regex.test(palabra);
}





/*para copiar */
/*function copiar() {
    msg.select();
    document.execCommand('copiar');
}
*/

function copiar(idElemento) {
    var sms = document.getElementById(idElemento).value;
    navigator.clipboard.writeText(sms);
    return;
}