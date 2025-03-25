function verificarNumero(){
    let verificar = parseFloat(document.getElementById("numero").value)

    if (verificar > 0){
        document.getElementById("resultado").textContent = "Resultado = positivo"
    }else{
        document.getElementById("resultado").textContent = "Resultado = negativo"
    }
}