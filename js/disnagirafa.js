const maior = () => {
    const input = document.getElementById("palavras").value;
    alert(input);
    const arrayStrings = input.split(",").map(str => str.trim()); // Vai dividir e remover espaços extras

    let maiorString = arrayStrings[0];
    alert(maiorString);
    for (let i = 1; i < arrayStrings.length; i++) {
        if (arrayStrings[i].length > maiorString.length) {
            maiorString = arrayStrings[i];
        }
    }
    document.getElementById("resultado").innerText = `A maior string é: ${maiorString}`;
}
