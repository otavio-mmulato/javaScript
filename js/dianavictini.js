const interacao = () => {
    const produto = {
        nome: 'Kindle',
        preco: 499.99,
        marca: 'Amazon',
        emEstoque: true 
    };

    const tabelaDados = document.getElementById('tabelaDados').getElementsByTagName("tbody")[0];

    for (const chave in produto) {
        const novaLinha = tabelaDados.insertRow();
        const celulaChave = novaLinha.insertCell();
        const celulaValor = novaLinha.insertCell();

        celulaChave.textContent = chave;
        celulaValor.textContent = produto[chave];
    }
}
