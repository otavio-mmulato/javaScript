const calcularMaiorSalario = () => {
    let nomes = document.getElementById("nomes").value.split(",").map(n => n.trim());
        let salarios = document.getElementById("salarios").value.split(",").map(s => parseFloat(s.trim()));
        
        if (nomes.length !== salarios.length || salarios.some(isNaN)) {
            document.getElementById("resultado").textContent = "Erro: Certifique-se de que os nomes e salários estão corretamente preenchidos sua anta.";
        } else {
            let funcionarios = nomes.map((nome, index) => ({ nome, salario: salarios[index] }));
            let maior = funcionarios[0];
            
            for (let i = 1; i < funcionarios.length; i++) {
                if (funcionarios[i].salario > maior.salario) {
                    maior = funcionarios[i];
                }
            }
            
            document.getElementById("resultado").textContent = "Maior salário: " + maior.nome;
        }
}