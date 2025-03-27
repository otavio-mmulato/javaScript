const verificar = () => {
    const entrada = document.getElementById("entrada").value;

    if (entrada === "") {
        document.getElementById("resultado").textContent = "A string está vazia";
    } else {
        document.getElementById("resultado").textContent = "A string não está vazia";
    }
}
