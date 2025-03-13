function somar(){
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let soma = n1 + n2

    document.getElementById("resultado").textContent = "Resultado: " + soma;
}