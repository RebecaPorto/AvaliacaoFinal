const url_server = "";

function cadastrar() {
    console.log('Enviando dados ao servidor...');
  
  
    const dados = {
      pLaca: document.querySelector('[name="placa"]').value,
      modelo: document.querySelector('[name="modelo"]').value,
      Combustivel: document.querySelector('[name="Combustivel"]').value,
      rodas: document.querySelector('[name="Rodas"]').value,
      altura: document.querySelector('[name="Altura"]').value,
      Marca: document.querySelector('[name="marca"]').value,
      kmrodado: document.querySelector('[name="km rodado"]').value,
      eixos:document.querySelector('[name="eixos"]').value,
    }
  

    console.log(dados);

    
    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
    fetch(`${url_server}/cadastro`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
      // Depois de feita a requisição, o front-end irá receber um retorno do servidor
      .then(response => response.json())
      // Se toda a requisição deu certo, será informado no log
      .then(dados => {
          console.log('Resposta do servidor:', dados);
          // Faça algo com a resposta do servidor, se necessário
      })
      // Caso tenha algum tipo de erro na requisição, é lançada a excessão
      .catch(error => {
          console.error('Erro ao enviar dados para o servidor:', error);
          // Trate os erros, se necessário
      });

}
function CadastrarVeiculos() {
  fetch(`${url_server}/pessoas`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
      });
}
