function contarLetras() {
    let frase = document.getElementById("frase").value.toLowerCase();
    let contagem = {};

    //of = de, ou seja, o char da frase. char = tipo de variavel, não gosto muito mas é meio meh
    for (let char of frase) {
        if (char.match(/[a-zà-ú]/)) { // Considera apenas letras, nota2: O método match()retorna uma correspondência entre uma string com uma expressão regular .
            contagem[char] = (contagem[char] || 0) + 1;
        }
    }

    let resultadoTexto = Object.entries(contagem) // O Object.entries()método estático retorna uma matriz de pares de chave-valor de propriedade enumeráveis ​​de strings de um determinado objeto
        .map(([letra, quantidade]) => `"${letra}": ${quantidade}`) // O Object.entries()método estático retorna uma matriz de pares de chave-valor de propriedade enumeráveis ​​de strings de um determinado objeto
        .join(", "); //Vai reunir adicionando uma letra

    document.getElementById("resultado").innerText = resultadoTexto || "Nenhuma letra encontrada."; // || variavel para fazer ou. ps: eu sinto sua falta javinha.
}