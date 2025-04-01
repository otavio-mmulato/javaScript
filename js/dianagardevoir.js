const cinco = () => {
    let resultadoDiv = document.getElementById("resultado");
    let multiplo = "";

    let contador = 1;
    do{
        if (contador % 5 == 0){
            multiplo += contador + "<br>";
        }
        contador ++;
    } while (contador <= 100);

    resultadoDiv.innerHTML = multiplo;
}
