function estilo1()  {

    let formulario = document.getElementById('formulario');


    formulario.setAttribute('class', 'estilo1');
}
function estilo2()  {
    let formulario = document.getElementById('formulario');


    formulario.setAttribute('class', 'estilo2');
    formulario.style.backgroundColor="#ffeeba";
    formulario.style.padding="20px";
    formulario.style.border="2px dashed #ff8800";
    formulario.style.borderRadius="12px";
    formulario.style.textAlign="center";
    formulario.style.boxShadow="none";
    formulario.style.width="80%";

}
function resaltarBoton()  {
    let boton =document.getElementById('boton');
    boton.setAttribute('class', 'botonResaltado');

}
function quitarResaltado() {

    boton.removeAttribute('class');
}
function resetearEstilo(){
    formulario.removeAttribute('class', 'estilo1');
    formulario.removeAttribute('class', 'estilo2');
}
