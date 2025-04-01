const interacao = () => {
    const numeros = [1, 2, 3, 4, 5];
    let resultadoDiv = document.getElementById("resultado");

    let output = "";

    for (const numero of numeros) {
        output += numero + "<br>";
    }

    resultadoDiv.innerHTML = output;
}
const par = () => {
    const numeros = [1, 2, 3, 4, 5];
    let resultadoDiv = document.getElementById("resultado");

    let output = "";

    for (const numero of numeros) {
        if (numero % 2 == 0){
            output += numero + "<br>";
        }
    }

    resultadoDiv.innerHTML = output;
}
const impar = () => {
    const numeros = [1, 2, 3, 4, 5];
    let resultadoDiv = document.getElementById("resultado");

    let output = "";

    for (const numero of numeros) {
        if (numero % 2 != 0){
            output += numero + "<br>";
        }
    }

    resultadoDiv.innerHTML = output;
}