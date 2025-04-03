const valueQuadrado = () => {
    let input = document.getElementById("numeros").value;
    let inputArray = input.split(",").map(item => parseFloat(item.trim())); //criar uma subfunção dentro da principal, eu defino a nova variavel intem utilizando o parse float, depois transformo em função dentro do meu map().
    let quadrado = inputArray.map((item) => item * item);
    document.getElementById("resultado").innerText = "Array com os números elevados ao quadrado: " + quadrado.join(", ");
}
