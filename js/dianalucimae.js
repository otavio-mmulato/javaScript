function reverseString(str) {
    // O método split() para retornar um novo array, vai quebrar as letras
    var splitString = str.split("");
    
    var reverseArray = splitString.reverse();
    
    // O método join() para unir todos os elementos do array em uma string que foram quebrados, *join == reunir/juntar
    var joinArray = reverseArray.join("");
    
    document.getElementById('resultado').innerText = "Resultado: " + joinArray;
}
