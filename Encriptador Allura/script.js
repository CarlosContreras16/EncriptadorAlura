const campo_texto = document.querySelector("#texto-a-encriptar");
var campo = document.getElementById("texto-a-encriptar");
const campo_mensaje = document.querySelector("#mensaje-final");
const encriptadorvacio = document.querySelector(".encriptador-vacio");
var msjencriptado = document.querySelector(".mensaje-salida");
const validacion = document.querySelector("#texto-a-encriptar");
const msj = document.querySelector("#msj");
/* console.log(campo_texto); */

 const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
 ];

 function validartexto(input) {
   const validar = /[^a-z]/
   return validar.test(input);
 }

 function btnEncriptar(){
   if (validartexto(validacion.value)) {
      msj.innerText = 'Solo se permiten letras minúsculas';
      encriptadorvacio.style.display = "block"
      msjencriptado.style.display = "none"
      /* alert('Ingrese solo letras minusculas'); */
   } else {
      if (campo_texto.value.length == 0) {
         alert("Debe ingresar un texto para Encriptarlo");
         encriptadorvacio.style.display = "block"
         msjencriptado.style.display = "none"
       } else {
         const texto = encriptar(campo_texto.value);
         console.log(texto);
         campo_mensaje.value = texto;
         /* campo_texto.value = ""; */
         console.log(campo.value.length);
         encriptadorvacio.style.display = "none"
         msjencriptado.style.display = "block"
       }  
   }
    
 }

 function btnDesencriptar(){
   if (validartexto(validacion.value)) {
      msj.innerText = 'Solo se permiten letras minúsculas y sin núumeros';
      encriptadorvacio.style.display = "block"
      msjencriptado.style.display = "none"
   } else {
      if (campo_texto.value.length == 0) {
         alert("Debe ingresar un texto para Desencriptarlo");
         encriptadorvacio.style.display = "block"
         msjencriptado.style.display = "none"
      } else {
         const mensaje = Desencriptar(campo_texto.value); 
         console.log(mensaje);
         campo_mensaje.value = mensaje;
         encriptadorvacio.style.display = "none"
         msjencriptado.style.display = "block"
      }   
   }  
 }

 function encriptar(fraseencriptada){

    for(let i = 0; i < matriz_code.length; i++){
        if(fraseencriptada.includes(matriz_code[i][0])){
         fraseencriptada = fraseencriptada.replaceAll(
            matriz_code[i][0],
            matriz_code[i][1]
         );
        }
    }
    return fraseencriptada;
 }

 function Desencriptar(frasedesencriptada){
   for (let i = 0; i < matriz_code.length; i++) {
      if (frasedesencriptada.includes(matriz_code[i][0])) {
         frasedesencriptada = frasedesencriptada.replaceAll(
            matriz_code[i][1],
            matriz_code[i][0]
         );
      }
   }
   return frasedesencriptada;
 }

 function BtnCopiar() {
   let mensajecopiar = document.getElementById("mensaje-final").value;
   console.log(mensajecopiar);
   navigator.clipboard.writeText(mensajecopiar)
   .then(() => {
      console.log('Texto copiado al portapapeles correctamente');
   })
   .catch(err => {
      console.log('Error al copiar el texto al portapapeles');
   });
 }



