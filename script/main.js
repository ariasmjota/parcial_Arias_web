function cargarPagina(){
    var url=document.querySelector('.url');
    var rotacion=document.querySelector('.rotacion');
    var imagen=document.querySelector('.imagen');

    function paraRotar(){
        
        imagen.style.transform= 'rotate('+rotacion.value+'deg)';
        console.log(rotacion)
    }
    rotacion.addEventListener('input',paraRotar);

    function cambiarUrl(){

       imagen.style.backgroundImage='url('+url.value+')';

    }url.addEventListener('input',cambiarUrl)


 } window.addEventListener('load',cargarPagina);
    