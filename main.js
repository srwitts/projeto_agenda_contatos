const form = document.getElementById('form-agenda');
const nomeCadastrados = [];
const telCadastrados = [];

// Variável que garante que os dados sejam adicionados em uma nova linha
let linhas = '';

// Evento de submit e remoção de atualização do form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();

});

// Função para adicionar os valores recebidos nos campos à tabela e uma nova linha
function adicionaLinha() {
  const nome = document.getElementById('inputNome');
  const tel = document.getElementById('inputTel');
  
// If para evitar cadastrar o mesmo telefone
  if (telCadastrados.includes(tel.value)) {
    alert(`O telefone: ${tel.value} já está cadastrado`);
  } else {
    nomeCadastrados.push(nome.value);
    telCadastrados.push(tel.value);
  
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += '</tr>';
  
    linhas += linha;
  }

  nome.value = '';
  tel.value = '';
}

// Função atualiza o conteudo da tabela
function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}