const impar = () => {
    let resultadoDiv = document.getElementById("resultado");
    let numerosImpares = "";

    for(let i = 0; i <= 10; i++){
        if (i % 2 == 1){
            numerosImpares += i + "<br>";
        }
    }
    resultadoDiv.innerHTML = numerosImpares;
}