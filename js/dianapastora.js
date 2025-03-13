function conversao() {
    let diana = parseFloat(document.getElementById("temperatura").value);
    
    fahrenheit = (diana * 1.8) + 32

    document.getElementById("resultado").textContent = "Resultado: " + fahrenheit;
}