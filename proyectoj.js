/*encriptador */
var botonEncriptar = document.querySelector(".boton-encriptador")
botonEncriptar.onclick = encriptador;

function encriptador(){
    var textoPrincipal = document.getElementById("texto-principal").value;
         textoPrincipal= textoPrincipal.replace (/e/g,"enter");
         textoPrincipal= textoPrincipal.replace (/i/g,"imes");
         textoPrincipal= textoPrincipal.replace (/a/g,"ai");
         textoPrincipal= textoPrincipal.replace (/o/g,"ober");
         textoPrincipal= textoPrincipal.replace (/u/g,"ufat");
    document.getElementById("texto-apartado").value=textoPrincipal;
}/*fin De Encriptador */

 /*Esencriptador */
var botondesencriptar = document.querySelector(".boton-desencriptador")
botondesencriptar.onclick = desencriptar;

function desencriptar(){
var textoPrincipal = document.getElementById("texto-principal").value;

    textoPrincipal= textoPrincipal.replace (/enter/g,"e");
    textoPrincipal= textoPrincipal.replace (/imes/g,"i");
    textoPrincipal= textoPrincipal.replace (/ai/g,"a");
    textoPrincipal= textoPrincipal.replace (/ober/g,"o");
    textoPrincipal= textoPrincipal.replace (/ufat/g,"u");
document.getElementById("texto-apartado").value=textoPrincipal;
}
 /*Esencriptador */
