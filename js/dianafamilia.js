function primo(){
    var numero = parseInt(document.getElementById('num').value);
    var divisores=0;
  
    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        document.getElementById("resultado").textContent ='É primo';
    else
        document.getElementById("resultado").textContent = 'Não é primo';
  }