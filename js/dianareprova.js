const mediaPares = () => {
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number); 
    
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) { 
            soma += numeros[i];
        }
    }
    let media = soma / numeros.filter(numero => numero % 2 === 0).length

    document.getElementById("resultado").innerText = "A média dos números pares é: " + media; 
}