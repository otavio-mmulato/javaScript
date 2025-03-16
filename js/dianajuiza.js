function verificarIdade() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    if (idade <= 2) {
        resultado.innerHTML = "Resultado: " + nome + " é um bebê 👶";
    } else if (idade >= 3 && idade <= 12) {
        resultado.innerHTML = "Resultado: " + nome + " é uma criança 🧒";
    } else if (idade >= 13 && idade <= 18) {
        resultado.innerHTML = "Resultado: " + nome + " é um adolescente 🧑";
    } else if (idade >= 19 && idade <= 59) {
        resultado.innerHTML = "Resultado: " + nome + " é um adulto 🧑";
    } else {
        resultado.innerHTML = "Resultado: " + nome + " está na melhor idade idoso 🧑";
    }
}