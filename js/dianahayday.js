function mostrarDia() {
    let dia = document.getElementById("dia").value;
    let resultado = document.getElementById("resultado");

    if (dia == 1) {
        resultado.textContent = "Domingo";
    } else if (dia == 2) {
        resultado.textContent = "Segunda-feira";
    } else if (dia == 3) {
        resultado.textContent = "Terça-feira";
    } else if (dia == 4) {
        resultado.textContent = "Quarta-feira";
    } else if (dia == 5) {
        resultado.textContent = "Quinta-feira";
    } else if (dia == 6) {
        resultado.textContent = "Sexta-feira";
    } else if (dia == 7) {
        resultado.textContent = "Sábado";
    } else {
        resultado.textContent = "Dia inválido!";
    }
}