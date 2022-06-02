let overlay = document.querySelector(".overlay");

function changeDisplay() {
  overlay.style.display = "none";
}

const cartaoPokemons = document.querySelectorAll(".cartao-pokemon");
cartaoPokemons.forEach((pokemon) => {
  pokemon.addEventListener("click", () => {
    if (overlay.classList.contains("animate__zoomOut")) {
      overlay.classList.remove("animate__zoomOut");
    }
    overlay.classList.add("animate__zoomIn");
    overlay.style.display = "flex";
  });
});

const btnCloseModal = document.querySelector(".btn-close img");
btnCloseModal.addEventListener("click", () => {
  if (overlay.classList.contains("animate__zoomIn")) {
    overlay.classList.remove("animate__zoomIn");
    overlay.classList.add("animate__zoomOut");
    setTimeout(changeDisplay, 1000);
  }
});

const url = "https://pokeapi.co/api/v2/pokemon/1/";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log("Erro: " + erro);
  });
