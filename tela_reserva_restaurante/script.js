document.addEventListener('DOMContentLoaded', function () {
  const restaurantForm = document.getElementById('restaurant-form');
  const restaurantCarousel = document.getElementById('restaurant-carousel');
  let currentIndex = 0;

  restaurantForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const restaurantName = document.getElementById('restaurant-name').value;
      const restaurantDescription = document.getElementById('restaurant-description').value;
      const restaurantPhotoInput = document.getElementById('restaurant-photo');
      const restaurantLocation = document.getElementById('restaurant-location').value;

      // Crie um novo card para o restaurante
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('restaurant-card');
      restaurantCard.innerHTML = `
          <h3>${restaurantName}</h3>
          <p>${restaurantDescription}</p>
          <img src="${URL.createObjectURL(restaurantPhotoInput.files[0])}" alt="${restaurantName}" />
          <p>Localização: ${restaurantLocation}</p>
      `;

      // Adicione o card ao carrossel
      restaurantCarousel.appendChild(restaurantCard);

      // Limpe o formulário
      restaurantForm.reset();
  });

  window.changeRestaurant = function (direction) {
      const cardWidth = document.querySelector('.restaurant-card').offsetWidth;
      const maxIndex = restaurantCarousel.childElementCount - 1;

      currentIndex = (currentIndex + direction + restaurantCarousel.childElementCount) % restaurantCarousel.childElementCount;

      const translateValue = -currentIndex * cardWidth;
      restaurantCarousel.style.transform = `translateX(${translateValue}px)`;
  };
});


//Carrinho...

// Simulação de dados fictícios de restaurantes
  const restaurantes = [
    { id:'0001', nome: 'Xapuri', descricao: 'Culinária mineira tradicional preparada em forno à lenha.', foto: '../tela_reserva_restaurante/img-restaurantes/xapuri.jpeg', localizacao: 'Endereço: Rua Mandacarú, 260 - Loja 1 - Trevo, Belo Horizonte - MG, 31370-270', url: 'https://maps.app.goo.gl/SSMGVPLkbhkaJSmY9' , valor: 70 },
    { id:'0002', nome: 'Ponto do Baião', descricao: 'Tem mesas externas · Bom para assistir a esportes', foto: '../tela_reserva_restaurante/img-restaurantes/ponto_do_baiao.jpg', localizacao: 'Rua VII, 229 - Quintino Cunha, Fortaleza - CE, 60351-770', url:'https://maps.app.goo.gl/ePuGmd7XmPHCNGkP9', valor: 40 },
    { id:'0003', nome: 'Parraxaxa', descricao: 'A cozinha do Nordeste, da carne de sol e do feijão verde.', foto: '../tela_reserva_restaurante/img-restaurantes/parraxaxa.png', localizacao: 'R. Igarassu, 40 - Casa Forte, Recife - PE, 52060-400', url:'https://maps.app.goo.gl/RU3AVNJZdU9Wfv5w8', valor: 80 },
    { id:'0004', nome: 'Pão de Queijaria', descricao: 'Local animado e especialização em variações de pão de queijo.', foto: '../tela_reserva_restaurante/img-restaurantes/pao-de-queijaria-savassi.png', localizacao: 'R. Antônio de Albuquerque, 856 - Funcionários, Belo Horizonte - MG, 30112-011', url:'https://maps.app.goo.gl/gSTCG2x1846nUwqm7', valor: 100 },
    { id:'0005', nome: 'Bar da Dona Onça', descricao: 'Restaurante tradicional, charmoso e com iluminação suave.', foto: '../tela_reserva_restaurante/img-restaurantes/bar_da_dona_onça.jpg', localizacao: 'Edifício Copan - Av. Ipiranga, 200 - 27 e 29 - Centro Histórico de São Paulo, São Paulo - SP, 01046-925', url:'https://maps.app.goo.gl/Kwx5qA4P1QowmBaN7', valor: 50 },
    { id:'0006', nome: 'Caipira Xique', descricao: 'Porções e pratos típicos da cozinha mineira.', foto: '../tela_reserva_restaurante/img-restaurantes/caipira_xique.jpeg', localizacao: 'R. Francisco Bretas Bering, 324 - Copacabana, Belo Horizonte - MG, 31550-060', url:'https://maps.app.goo.gl/kt9hFqw56qVC8i2R9', valor: 60 }
];

document.addEventListener('DOMContentLoaded', function () {

  // Adiciona uma tag meta para desabilitar o cache
  const metaTag = document.createElement('meta');
  metaTag.httpEquiv = 'cache-control';
  metaTag.content = 'no-store';
  document.head.appendChild(metaTag);

  const restaurantList = document.getElementById('restaurant-list');

  // Preencher a lista de restaurantes
  restaurantes.forEach(restaurante => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <h3>${restaurante.nome}</h3>
          <p>${restaurante.descricao}</p>
          <img id="restArray" src="${restaurante.foto}" alt="${restaurante.nome}" />
          <a href="${restaurante.url}" target="_blank">
          <p>${restaurante.localizacao}</p>
          </a>
          <button id="${restaurante.id}" class="reservar-btn" onclick="openModal()">Reservar</button>
      `;
      restaurantList.appendChild(listItem);
  });

  function resetValoresCarrinho() {
    quantidadeSubtotal.innerText = '0 Pessoa';
    valorSubtotal.innerText = '0.00';
    contagem = 0;
  }

  //Incrementando a capa do restaurante em cada botão
  const reservarButtons = document.querySelectorAll('.reservar-btn');
  let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
  let valorSubtotal = document.getElementById("valor-subtotal");

  reservarButtons.forEach(button => {
    button.addEventListener('click', function() {
      resetValoresCarrinho()
      const restauranteId = button.getAttribute('id');
      const restaurante = restaurantes.find(r => r.id === restauranteId);

      if (restaurante) {
        const itemCarrinho = document.querySelector('.item-carrinho');
        itemCarrinho.innerHTML = `
        <div class="capa">
          <img id="restArray" src="${restaurante.foto}" alt="${restaurante.descricao}">
        </div>
        <h3>${restaurante.nome}</h3>
        <h4>${restaurante.descricao}</h4>
        <p>R$ ${restaurante.valor} Pessoa</p>
        <button id="btn-subtrair-produto-01">-</button>
        <input class="inputCarrinho" id="quantidade-produto-01" type="number" value="1" min="0">
        <button id="btn-adicionar-produto-01">+</button>
        <button id="btn-excluir-produto-01">EXCLUIR</button>
        <label for="data-selecionada">Data:</label>
        <input type="date" id="data-selecionada" name="data-selecionada">
        `

        let botaoAdd = document.querySelector('#btn-adicionar-produto-01')
        let botaoSubtrair = document.querySelector('#btn-subtrair-produto-01')
        let qtdProdutos = document.querySelector('#quantidade-produto-01')
        qtdProdutos.value = 0
        contagem = 0
        
        botaoAdd.addEventListener('click',() => {
          contagem = contagem +1
          qtdProdutos.value = contagem
          atualizarQuantidadeSubtotal();
        })
        
        botaoSubtrair.addEventListener('click',() => {
          if(contagem > 0){
            contagem = contagem -1
          qtdProdutos.value = contagem
          atualizarQuantidadeSubtotal();
          }
        })
        
        let excluirProdutos = document.querySelector('#btn-excluir-produto-01')
        
        excluirProdutos.addEventListener('click',() =>{
          contagem = 0
          qtdProdutos.value = contagem
          atualizarQuantidadeSubtotal();
        })
        
        qtdProdutos.addEventListener('blur',() =>{
          contagem = qtdProdutos.value
          atualizarQuantidadeSubtotal();
        
        })
        

        
        function atualizarQuantidadeSubtotal() {
        const inputItens = qtdProdutos.value > 1 ? ' Pessoas' : ' Pessoa'
        quantidadeSubtotal.innerText = qtdProdutos.value + inputItens
        let calc = qtdProdutos.value * restaurante.valor
        valorSubtotal.innerText = calc.toFixed(2);
        }

        const btnreservar = document.getElementById('btn-reservar')
        const dataSelecionadaInput = document.getElementById('data-selecionada')

        btnreservar.addEventListener('click',()=>{
         
          const dataSelecionada = dataSelecionadaInput.value
          const valorTotal = valorSubtotal.innerText

          closeModal()
          mostrarCaixa();

          
        const resumo = document.getElementById('resumo')
        resumo.innerHTML = `
          <h3>${restaurante.nome}</h3>
          <h3>Data Selecionada: ${dataSelecionada}</h3>
          <h3>Valor Total: R$ ${valorTotal}</h3>
        `
        })
      }
    });
  });
  const containerComentarios = document.getElementById('container-comentarios');
  const comentariosIniciais = [
      { nome: 'João', comentario: 'Ótimo restaurante!' },
      { nome: 'Maria', comentario: 'Adorei a comida e o ambiente.' }
  ];
  comentariosIniciais.forEach(comentario => adicionarComentarioAoContainer(comentario, containerComentarios));
});


function openModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'flex';
}

function closeModal() {
  const reservationModal = document.getElementById('reservation-modal');
  reservationModal.style.display = 'none';
}


// Manipulando a caixa de reserva concluida

function mostrarCaixa() {
  const caixa = document.getElementById('reservaConcluidaCaixa');
  caixa.style.display = 'block';
}

function fecharCaixa() {
  const caixa = document.getElementById('reservaConcluidaCaixa');
  caixa.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function () {
  const btnSair = document.getElementById('menu-sair');

  btnSair.addEventListener('click', function () {
    window.location.href = '../tela_login/index.html';
  });
});

// Funções comentarios

function adicionarComentario() {
  const nomeInput = document.getElementById('nome');
  const comentarioInput = document.getElementById('comentario');
  const containerComentarios = document.getElementById('container-comentarios');

  const nome = nomeInput.value;
  const comentario = comentarioInput.value;

  if (nome && comentario) {
      const novoComentario = { nome, comentario };
      adicionarComentarioAoContainer(novoComentario, containerComentarios);

      // Limpa os campos do formulário
      nomeInput.value = '';
      comentarioInput.value = '';
  }
}

function adicionarComentarioAoContainer(comentario, container) {
  const divComentario = document.createElement('div');
  divComentario.classList.add('comentario');

  const nomeParagrafo = document.createElement('p');
  nomeParagrafo.classList.add('nome-comentario');
  nomeParagrafo.textContent = comentario.nome;

  const comentarioParagrafo = document.createElement('p');
  comentarioParagrafo.classList.add('texto-comentario');
  comentarioParagrafo.textContent = comentario.comentario;

  divComentario.appendChild(nomeParagrafo);
  divComentario.appendChild(comentarioParagrafo);
  container.appendChild(divComentario);
}

// Adiciona um redirecionamento para a página de login após o logout
document.getElementById('menu-sair').addEventListener('click', function () {
  // Adiciona uma nova entrada no histórico
  history.pushState({}, '', '../tela_login/index.html');
  // Redireciona para '../tela_login/index.html'
  window.location.href = '../tela_login/index.html';
});
