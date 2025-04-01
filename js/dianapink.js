const campo = document.getElementById("campoTexto");

campo.addEventListener('keydown', function(event){
    console.log('Tecla pressionada:', event.key); //alert(event.key);
});