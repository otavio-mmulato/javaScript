// Função para adicionar um valor ao display
function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        // Vai fazer a conta e voltar o resultado
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        // Em caso de erro, exibe uma mensagem de erro
        document.getElementById('display').value = 'Erro';
    }
}
