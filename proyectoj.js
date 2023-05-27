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

}
