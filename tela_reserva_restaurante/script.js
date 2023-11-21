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
    { id:'0001', nome: 'Restaurante 1', descricao: 'Comida deliciosa', foto: './img-restaurantes/rest1.jpg', localizacao: 'Rua 1', valor: 70 },
    { id:'0002', nome: 'Restaurante 2', descricao: 'Ótima vista', foto: './img-restaurantes/rest2.jpg', localizacao: 'Rua 2', valor: 40 },
    { id:'0003', nome: 'Restaurante 3', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest3.jpg', localizacao: 'Rua 3', valor: 80 },
    { id:'0004', nome: 'Restaurante 4', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest4.jpg', localizacao: 'Rua 3', valor: 100 },
    { id:'0005', nome: 'Restaurante 5', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest5.jpg', localizacao: 'Rua 3', valor: 50 },
    { id:'0006', nome: 'Restaurante 6', descricao: 'Cozinha internacional', foto: './img-restaurantes/rest6.jpg', localizacao: 'Rua 3', valor: 60 }
];


document.addEventListener('DOMContentLoaded', function () {
  const restaurantList = document.getElementById('restaurant-list');

  // Preencher a lista de restaurantes
  restaurantes.forEach(restaurante => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
          <h3>${restaurante.nome}</h3>
          <p>${restaurante.descricao}</p>
          <img id="restArray" src="${restaurante.foto}" alt="${restaurante.nome}" />
          <p>Localização: ${restaurante.localizacao}</p>
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
