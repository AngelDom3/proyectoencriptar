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

 /*Desencriptador */
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
 /*Fin de Desencriptador */

 /*copiar texto y eliminarlo*/
 var botonCopiar = document.querySelector(".boton-copiar")
     botonCopiar.onclick = copiarYEliminar;

 function copiarYEliminar(){
    
    
     var textoCopiar = document.querySelector(".texto-apartado")

     textoCopiar.select()
     document.execCommand("copy")
     document.execCommand("delete")

     
     var principalEliminar = document.querySelector(".texto-principal")
     principalEliminar.select()
     document.execCommand("delete")


 }

 /*copiar texto y eliminarlo*/