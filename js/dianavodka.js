const filtrarMaiores = () => {
    // Pega os valores dos inputs, separa por vírgula e faz o trim para remover espaços
    let nomes = document.getElementById("nomes").value.split(",").map(n => n.trim());
    let idades = document.getElementById("idades").value.split(",").map(i => parseInt(i.trim()));

    // Pega a lista no HTML onde será exibido o resultado
    let listaMaiores = document.getElementById("ListaMaiores");
    listaMaiores.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

    // Verifica se o número de nomes e idades coincide
    if (nomes.length !== idades.length) {
        alert("O número de nomes e idades não coincide!");
        return;
    }

    // Filtra os nomes e idades para pegar apenas aqueles maiores de 18 anos
    let maiores = nomes.filter((nome, i) => idades[i] > 18);

    // Se não houver pessoas maiores de 18, mostra uma mensagem
    if (maiores.length === 0) {
        let item = document.createElement("li");
        item.textContent = "Nenhuma pessoa maior de 18 anos foi encontrada.";
        listaMaiores.appendChild(item);
    } else {
        // Adiciona na lista os nomes e idades maiores que 18
        maiores.forEach((nome, i) => { //Para cada um =forEach
            if (idades[i] > 18) { // Verifica novamente se a idade é maior que 18
                var item = document.createElement("li"); // Cria o item da lista
                item.textContent = nome + " - " + idades[i] + " anos"; // Define o texto do item
                listaMaiores.appendChild(item); // Adiciona o item à lista, vai pegar o bagulho e jogar na nova posição
            }
        });
    }
}