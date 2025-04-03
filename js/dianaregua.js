const tamanhoString = () => {
    const input = document.getElementById("palavras").value;
    const arrayStrings = input.split(",").map(str => str.trim()); // Vai dividir **split() e remover espaços extras **metódo trim()
    const comprimentos = arrayStrings.map(str => str.length);

    document.getElementById("resultado").innerText = "Comprimentos: " + comprimentos.join(", ");
}