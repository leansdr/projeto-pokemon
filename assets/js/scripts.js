let overlay = document.querySelector(".overlay");

function changeDisplay() {
  overlay.style.display = "none";
}

const btnCloseModal = document.querySelector(".btn-close img");
btnCloseModal.addEventListener("click", () => {
  if (overlay.classList.contains("animate__zoomIn")) {
    overlay.classList.remove("animate__zoomIn");
    overlay.classList.add("animate__zoomOut");
    setTimeout(changeDisplay, 1000);
  }
});

//Selecionando os elemento do HTML
let img = document.querySelector("#imagem");
let nome = document.querySelector("#nome");
let numero = document.querySelector("#numero");
let containerPokemon = document.querySelector("#container");

//Pegando as informações da API
const pegarPokemon = async () => {
  const arrayPokemon = [];
  for (let i = 1; i <= 251; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    const resp = await fetch(url);
    const data = await resp.json();

    arrayPokemon.push({
      number: data.id,
      img: data.sprites.other["official-artwork"].front_default,
      name: data.name,
      tipo: data.types,
    });
  }

  listarPokemon(arrayPokemon);
};

//Listando as informações no Front End
function listarPokemon(pokemons) {
  pokemons.map((pokemon) => {
    let card = `<li class="cartao-pokemon ${pokemon.tipo
      .map((item) => " " + item.type.name)
      .toString()
      .replace(",", "")}">
    <span id="numero">#${pokemon.number}</span>
    <figure class="cartao-imagem">
      <img
        id="imagem"
        src=${pokemon.img}
        alt=${pokemon.name}
      />
    </figure>
    <figcaption>
      <h3 id="nome">${pokemon.name}</h3>
    </figcaption>
  </li>`;
    containerPokemon.innerHTML += card;
  });
}

const cartaoPokemons = document.querySelectorAll(".cartao-pokemon");
cartaoPokemons.forEach((pokemonCard) => {
  pokemonCard.addEventListener("click", () => {
    if (overlay.classList.contains("animate__zoomOut")) {
      overlay.classList.remove("animate__zoomOut");
    }
    overlay.classList.add("animate__zoomIn");
    overlay.style.display = "flex";
  });
});

document.addEventListener("load", pegarPokemon());
