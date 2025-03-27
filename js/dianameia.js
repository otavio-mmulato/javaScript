const par = () => {
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number); 
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { 
            pares.push(numeros[i]); 
        }
    }

    document.getElementById("resultado").innerText = "A lista dos pares: " + pares.join(", "); 
}
