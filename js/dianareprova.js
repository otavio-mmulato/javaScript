const mediaImpares = () => {
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number); 
    
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 1) { 
            soma += numeros[i];
        }
    }
    let media = soma / numeros.filter(numero => numero % 2 == 1).length

    document.getElementById("resultado").innerText = "A média dos números impares é: " + media; 
}