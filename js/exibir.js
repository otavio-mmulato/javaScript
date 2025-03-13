function exibirNome() {
    let nome = document.getElementById("nome").value;
    
    document.getElementById("saudacao").textContent = "Olá, " + nome + "!";
}