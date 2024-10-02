var moveButton = document.querySelector(".move-button");
var correctlyButton = document.querySelector(".correctly-button");
var imageContainer = document.getElementById("image-container");

moveButton.addEventListener("click", function () {
  var vertical = Math.floor(Math.random() * (window.innerHeight - moveButton.offsetHeight));
  var horizontal = Math.floor(Math.random() * (window.innerWidth - moveButton.offsetWidth));
  moveButton.style.position = "absolute";
  moveButton.style.left = horizontal + "px";
  moveButton.style.top = vertical + "px";
});

correctlyButton.addEventListener("click", function () {
  // Exibe o alerta
  alert("EU TE AMO Beatriz!!!");

  // Remove qualquer imagem existente no contêiner
  imageContainer.innerHTML = '';

  // Cria um novo elemento de imagem
  var img = document.createElement("img");
  img.src = "img/fofo.jpg"; // Nome do arquivo da imagem na mesma pasta
  img.alt = "Imagem"; // Texto alternativo para acessibilidade

  // Adiciona estilo para ocupar toda a tela
  img.style.position = "fixed";
  img.style.top = "0";
  img.style.left = "0";
  img.style.width = "100vw"; // 100% da largura da janela
  img.style.height = "100vh"; // 100% da altura da janela
  img.style.objectFit = "cover"; // Garante que a imagem cubra toda a área sem distorção

  // Adiciona a imagem ao contêiner
  imageContainer.appendChild(img);
});