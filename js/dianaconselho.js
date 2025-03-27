function calcular() {
    let input = document.getElementById("numeros").value;
    let numeros = input.split(",").map(Number); // resolvi utilizar o método do map assim como no código anterior
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    let media = soma / numeros.length;
    document.getElementById("resultado").innerText = `A média é: ${media}`;
}