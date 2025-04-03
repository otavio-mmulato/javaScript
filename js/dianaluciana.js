const alfabetico = () => {
    ordemcerta = document.getElementById("input").value.split(",").map(str => str.trim());
    ordemcerta.sort()

    document.getElementById("resultado").innerText = "Ordem alfabética: " + ordemcerta.join(", ");
}