function verificacao() {
    let n1 = parseFloat(document.getElementById("num1").value);
    
    if (n1 % 2 == 0) { 
        document.getElementById("resultado").textContent = "Resultado: Par";
    } else {
        document.getElementById("resultado").textContent = "Resultado: Ímpar";
    }
}
