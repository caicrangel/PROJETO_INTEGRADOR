const arrayDicasRestaurantes = [
  {
    imagem:"/pernambuco/imgPernambuco/parraxaxa.png",
    nomeRestaurante: "Parraxaxa",
    descricaoRestaurante:"O Parraxaxá é um dos restaurantes mais conhecidos do Recife, daqueles lugares para não faltar no roteiro! O local oferece um buffet com grande variedade de pratos, que incluem o melhor da cozinha brasileira - principalmente pratos da cozinha regional. Há diversos pratos deliciosos, salgados e doces - galinha à cabidela, carne seca, creme de camarão, bolinhos de charque, cocadas, bolo de rolo, queijo coalho etc.<br><br><br><br> Av. Fernando Simões Barbosa, 1200 - Boa Viagem, Recife",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63202.88584715476!2d-34.940665544078506!3d-8.083080387874325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f12ed8a5215%3A0xc286438426ed15c3!2sRestaurante%20Parraxax%C3%A1%20Boa%20Viagem!5e0!3m2!1spt-BR!2sbr!4v1702986796414!5m2!1spt-BR!2sbr",
  },

  {
    imagem: "/pernambuco/imgPernambuco/GotaSerena.jpg",
    nomeRestaurante: " Bar e Restaurante Gota Serena",
    descricaoRestaurante:"Restaurante ideal para grupos de amigos ou famílias, com música ao vivo, ambiente descontraído e cardápio variado, incluindo frutos do mar e comida regional.<br><br><br><br><br><br><br><br><br> Rua Manoel Joaquim de Almeida, 380 - Iputinga,<br> Recife",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.576881593998!2d-34.9451813249923!3d-8.042482591984587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1964d91c69cb%3A0xae0444a21d0039a0!2sGota%20Serena%20Bar%20e%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1702987186104!5m2!1spt-BR!2sbr",
  },

  {
    imagem: "/pernambuco/imgPernambuco/oficinaDoSabor.jpg",
    nomeRestaurante: "Oficina do Sabor",
    descricaoRestaurante:"A Oficina do Sabor é famosa por sua culinária pernambucana contemporânea, com pratos como carne de sol, peixes e frutos do mar preparados de maneira única. Experimente o bolo de rolo de sobremesa!<br><br><br><br><br><br><br><br> Rua do Amparo, 335 - Amparo,<br> Olinda",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.874669014185!2d-34.85648722499275!3d-8.011858892014343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab22afa6c1a75f%3A0xac055b0c4965c37b!2sOficina%20do%20Sabor!5e0!3m2!1spt-BR!2sbr!4v1702987627212!5m2!1spt-BR!2sbr",
  },

  {
    imagem:"/pernambuco/imgPernambuco/bargaco.jpg",
    nomeRestaurante: "Bargaço",
    descricaoRestaurante:"O Bargaço é conhecido por sua variedade de frutos do mar e peixes frescos. Pratos como a moqueca, peixada e o tradicional arrumadinho são destaques no menu.<br><br><br><br><br><br><br><br><br> Av. Antônio de Goes, 62 - Pina,<br> Recife",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.986327986855!2d-34.88800491224372!3d-8.08651042124771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f404c4b940d%3A0x243dbc9ded755a9b!2zQmFyZ2HDp28!5e0!3m2!1spt-BR!2sbr!4v1702988035240!5m2!1spt-BR!2sbr",
  },

  {
    imagem: "/pernambuco/imgPernambuco/entreAmigosOBode.jpg",
    nomeRestaurante: "Entre Amigos o Bode",
    descricaoRestaurante:"Especializado em comida nordestina, o Entre Amigos O Bode serve pratos típicos como buchada de bode, sarapatel e carne de sol, além de petiscos deliciosos para compartilhar.<br><br><br><br><br><br><br><br> Rua da Hora, 695 - Espinheiro,<br> Recife",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63202.47160829862!2d-34.95639108046871!3d-8.085724117904224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18eff1f89e89%3A0x42285dc43fc09104!2sEntre%20Amigos%20O%20Bode%20Espinheiro!5e0!3m2!1spt-BR!2sbr!4v1702988390491!5m2!1spt-BR!2sbr",
  },
];

// CAPTURANDO O ELEMENTO
// Esta parte do código espera até que o conteúdo da página (DOM) esteja completamente carregado antes de executar o código dentro da função. Quando o DOMContentLoaded é acionado, a função é chamada.
// A linha seguinte obtém a referência ao elemento com o ID "dicas-restaurantes", que é o contêiner onde as dicas de restaurantes serão exibidas.
document.addEventListener("DOMContentLoaded", function () {
let dicasRestaurantes = document.getElementById("dicas-restaurantes");

// EBARALHANDO O ARRAY
//  Essa parte do código embaralha o arrayDicasRestaurantes.
//  O método sort é usado para embaralhar o array, e a função de comparação Math serve para retornar um número positivo ou negativo aleatório, resultando no embaralhamento aleatório do array.
const arrayDicasEmbaralhadas = arrayDicasRestaurantes.sort(
  () => Math.random() - 0.5
);

// EXIBINDO DUAS DICAS POR VEZ
// Aqui, definimos algumas variáveis para controlar a quantidade de dicas exibidas por vez (dicasPorSlide),
// o número total de dicas disponíveis (totalDicas), e o índice atual da dica a ser exibida (indiceDicaAtual).
let dicasPorSlide = 2;
let totalDicas = arrayDicasEmbaralhadas.length;
let dicaAtual = 0;

// Função para criar e exibir as entradas do restaurante
// A função exibirEntradasDoRestaurante é responsável por limpar o conteúdo atual do elemento dicasRestaurantes,
// garantindo que as novas dicas sejam exibidas sem duplicatas.
function exibirEntradasDoRestaurante() {
  // Limpar o conteúdo atual
  dicasRestaurantes.innerHTML = "";

  // Loop para exibir dicasPorSlide número de dicas
  for (let i = 0; i < dicasPorSlide; i++) {
    // Calcular o índice atual da dica
    let indice = (dicaAtual + i) % totalDicas;

    // Criando uma nova div para cada entrada de restaurante
    let novaEntrada = document.createElement("div");
    novaEntrada.classList.add("transicao");

    // Definir innerHTML para a nova div
    novaEntrada.innerHTML = `
<div>                
  <div>
      <img class="img-indicacoes" src="${arrayDicasEmbaralhadas[indice].imagem}" alt="">  
  </div>

  <div class="conteudo-restaurantes">
      <h3 class="nome-estabelecimento">${arrayDicasEmbaralhadas[indice].nomeRestaurante}</h3>
      <br>
      <p class="descricao-estabelecimento">${arrayDicasEmbaralhadas[indice].descricaoRestaurante}</p>   
  </div> 
  <iframe class="fachada-maps" src="${arrayDicasEmbaralhadas[indice].mapa}"></iframe>
</div>
`;

    // Anexando a nova entrada ao elemento capturado
    dicasRestaurantes.appendChild(novaEntrada);

    novaEntrada.offsetWidth;
    novaEntrada.classList.add("active");
  }

  // Atualizar o índiceDicaAtual para o próximo conjunto de dicas
  dicaAtual = (dicaAtual + dicasPorSlide) % totalDicas;

  setTimeout(exibirEntradasDoRestaurante, 5000);
}

// Exibição inicial de entradas de restaurante
exibirEntradasDoRestaurante();
});
