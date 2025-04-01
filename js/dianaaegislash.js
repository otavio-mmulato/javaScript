const pares = () => {
    let resultadoDiv = document.getElementById("resultado");
    let numerosPares = "";

    let contador = 1;
    while (contador <= 10){
        if (contador % 2 == 0){
            numerosPares += contador + "<br>";
        }
        contador ++;
    }

    resultadoDiv.innerHTML = numerosPares;
}
