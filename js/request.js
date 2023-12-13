const url_server = "http://localhost:3000";

function cadastrar() {
    console.log('Enviando dados ao servidor...');

    const dados = {
        placa: document.querySelector('[name="Placa"]').value,
        modelo: document.querySelector('[name="Modelo"]').value,
        combustivel: document.querySelector('[name="Combustivel"]').value,
        rodas: document.querySelector('[name="Rodas"]').value,
        altura: document.querySelector('[name="Altura"]').value,
        marca: document.querySelector('[name="Marca"]').value,
        kmrodado: document.querySelector('[name="Km-rodado"]').value,
        eixos: document.querySelector('[name="Eixos"]').value,
        capacidadecarga: document.querySelector('[name="Capacidade-carga"]').value,
        tipocarga: document.querySelector('[name="Tipo-carga"]').value,
        numeroportas: document.querySelector('[name="Numero-portas"]').value,
        tipo: document.querySelector('[name="Tipo"]').value,
    }

    console.log(dados);

    fetch(`${url_server}/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(dados => {
        console.log('Resposta do servidor:', dados);
        // Faça algo com a resposta do servidor, se necessário
    })
    .catch(error => {
        console.error('Erro ao enviar dados para o servidor:', error);
        // Trate os erros, se necessário
    });
}

function listarVeiculo() {
    const tabela = document.querySelector('table');
    const contadorLinhas = tabela.rows.length;

    for (var i = contadorLinhas - 1; i > 0; i--) {
        tabela.deleteRow(i);
    }

    fetch(`${url_server}/veiculo`)
        .then(response => response.json())
        .then(data => {
            data.forEach(veiculo => {
                const tabela = document.querySelector('table');
                const elementTr = document.createElement('tr');
                const tdPlaca = document.createElement('td');
                const tdModelo = document.createElement('td');
                const tdCombustivel = document.createElement('td');
                const tdRodas = document.createElement('td');
                const tdAltura = document.createElement('td');
                const tdMarca = document.createElement('td');
                const tdKmrodado= document.createElement('td');
                const tdEixos= document.createElement('td');
                const tdCapacidadecarga= document.createElement('td');
                const tdTipoCarga= document.createElement('td');
                const tdNumeroDePortas= document.createElement('td');
                const tdTipo= document.createElement('td');

                tdPlaca.textContent = veiculo.placa;
                tdModelo.textContent = veiculo.modelo;
                tdCombustivel.textContent = veiculo.combustivel;
                tdRodas.textContent = veiculo.rodas;
                tdAltura.textContent = veiculo.altura;
                tdMarca.textContent = veiculo.marca;
                tdKmrodado.textContent = veiculo.kmrodado;
                tdEixos.textContent = veiculo.eixos;
                tdCapacidadecarga.textContent = veiculo.capacidadecarga;
                tdTipoCarga.textContent = veiculo.tipocarga;
                tdNumeroDePortas.textContent = veiculo.numeroportas;
                tdTipo.textContent = veiculo.tipo;

                elementTr.appendChild(tdPlaca);
                elementTr.appendChild(tdModelo);
                elementTr.appendChild(tdCombustivel);
                elementTr.appendChild(tdRodas);
                elementTr.appendChild(tdAltura);
                elementTr.appendChild(tdMarca);
                elementTr.appendChild(tdKmrodado);
                elementTr.appendChild(tdEixos);
                elementTr.appendChild(tdCapacidadecarga);
                elementTr.appendChild(tdTipoCarga);
                elementTr.appendChild(tdNumeroDePortas);
                elementTr.appendChild(tdTipo);

                tabela.appendChild(elementTr);
            });
        });
}

// Sempre ligar o servidor no back-end node .\dist\controller\app.js
