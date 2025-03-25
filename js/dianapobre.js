function calcularFatorial() {
    let numdiana = parseInt(document.getElementById("numdiana").value);
    
    // Verifica se o número é válido, porque não dá pra fazer fatorial com zero né
    if (isNaN(numdiana) || numdiana < 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um número válido (não negativo).";
        return;
    }

    // Função para calcular o fatorial, utilizando nosso falecido for do java.
    let resultado = 1;
    
    for (let i = 1; i <= numdiana; i++) {
        resultado *= i;
    }
    
    document.getElementById("resultado").textContent = `O fatorial de ${numdiana} é ${resultado}.`;
}
