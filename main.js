const form = document.getElementById('form-contato');
const tabelaContatos = document.querySelector('tfoot');
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

    function adicionaLinha() {
        const inputNome = document.getElementById('nome').value;
        const inputNumero = parseInt(document.getElementById('numero').value);

        nomes.push(inputNome);
        numeros.push(inputNumero);

        let linha = '<tr>';
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputNumero}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    function atualizaTabela() {
        tabelaContatos.innerHTML = linhas;
    }
});
