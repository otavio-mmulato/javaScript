function imc() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    const imc = peso / (altura * altura);

    document.getElementById("resultado").textContent = `Resultado: ${imc.toFixed(2)}`; //toFixed(2) arredonda para 2 casas para ficar mais apresentado
}
