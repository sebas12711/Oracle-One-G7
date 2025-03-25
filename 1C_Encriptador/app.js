const text_encriptar = document.querySelector(".textarea_encriptar");
const text_encriptado = document.querySelector(".textarea_encriptado");

/* Llaves de encriptación:
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

function encriptar(cadenaEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++) {
        if (cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function desencriptar(cadenaDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();

    for (let i=0; i<matrizCodigo.length; i++) {
        if (cadenaDesencriptada.includes(matrizCodigo[i][1])){
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada;
}

/* =============== EVENTOS =============== */
function btnEncriptar() {
    if (text_encriptar.value == "") {
        alert('DEBE INGRESAR TEXTO PARA ENCRIPTAR');
        return;
    }

    text_encriptado.style.display = "block";
    const textoEncriptado = encriptar(text_encriptar.value);
    text_encriptado.value = textoEncriptado;
    document.querySelector(".logo_encriptacion").style.display = "none";
    document.querySelector(".mensajes").style.visibility = "hidden";
}

function btnDesencriptar() {
    if (text_encriptar.value == "") {
        alert('DEBE INGRESAR TEXTO PARA DESENCRIPTAR');
        return;
    }

    text_encriptado.style.display = "block";
    const textoEncriptado = desencriptar(text_encriptar.value);
    text_encriptado.value = textoEncriptado;
    document.querySelector(".logo_encriptacion").style.display = "none";
    document.querySelector(".mensajes").style.visibility = "hidden";
}

function btnCopiar() {
    document.querySelector(".logo_encriptacion").style.display = "block";
    document.querySelector(".mensajes").style.visibility = "visible";

    /* Las siguientes dos líneas copian el texto en el portapapeles */
    text_encriptado.select();
    document.execCommand("copy");

    /* Ocultamos el textarea */
    text_encriptado.style.display = "none";

    /* Cambiamos el ícono de copiar */
    icono = document.querySelector(".icono");
    icono.src = "images/icon_check.png";
    setTimeout(function() {
        document.querySelector(".icono").src = "images/icon_copy.png" // Restaurar la clase original
    }, 1500);

    /* Hacemos que se subraye el texto donde se encripta/desencripta */
    text_encriptar.select();
    document.execCommand("underline");
}
