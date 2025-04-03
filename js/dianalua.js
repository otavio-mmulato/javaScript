const crescente = () => {
    ordemcerta = document.getElementById("input").value.split(",").map(str => str.trim());
    ordemcerta.sort((a,b) => a -b); // metódo para ordem crescente

    document.getElementById("resultado").innerText = "Ordem crescente: " + ordemcerta.join(", ");
}