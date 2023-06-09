const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

document.addEventListener("DOMContentLoaded", function() {
  mostrarBotonCopiar();
});


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  mostrarBotonCopiar();
  document.getElementById("mensaje-adicional").style.display = "none";
}


function encriptar(stringEncriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringEncriptada = stringEncriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada
}


function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  mostrarBotonCopiar();
  document.getElementById("mensaje-adicional").style.display = "none";
}


function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada
}

function mostrarBotonCopiar() {
  const textoEncriptadoDesencriptado = mensaje.value.trim();
  const btnCopiar = document.getElementById("btn-copiar");
  
  if (textoEncriptadoDesencriptado.length > 0) {
    btnCopiar.style.display = "block";
  } else {
    btnCopiar.style.display = "none";
  }
}

function copiar() {
  const contenido = mensaje.value;

  const textareaTemporal = document.createElement("textarea");
  textareaTemporal.value = contenido;
  document.body.appendChild(textareaTemporal);
  textareaTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(textareaTemporal);

  const mensajeCopiado = document.getElementById("mensaje-copiado");
  mensajeCopiado.style.display = "block";

  setTimeout(function() {
    mensajeCopiado.style.display = "none";
  }, 2000);
}

