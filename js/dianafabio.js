const maior = () => {
    let input = document.getElementById("numeros").value;
            let numeros = input.split(",").map(Number);
            let maiorNum = numeros[0];

            for (let i = 1; i < numeros.length; i++) {
                if (numeros[i] > maiorNum) {
                    maiorNum = numeros[i];
                }
            }

            document.getElementById("resultado").innerText = `O maior número é: ${maiorNum}`;
}