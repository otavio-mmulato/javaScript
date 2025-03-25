function verificarNumero(){
    let verificar = parseFloat(document.getElementById("numero").value)

    if (verificar % 2 == 0){
        document.getElementById("resultado").textContent = "Resultado = par"
    }else{
        document.getElementById("resultado").textContent = "Resultado = ímpar"
    }
}