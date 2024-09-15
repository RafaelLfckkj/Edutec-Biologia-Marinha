// Função para verificar a distância percorrida ao rolar
window.addEventListener("scroll", function() {
  // Seleciona o primeiro h1 e o main
  const h1 = document.querySelector("h1.zone0");
  const main = document.querySelector("main#deep-sea");
  const counter = document.getElementById("depth");

  // Obtém a distância entre o topo do h1 e o topo da janela de visualização
  const h1Top = h1.getBoundingClientRect().top;
  const mainBottom = main.getBoundingClientRect().bottom;

  // Define a profundidade inicial quando o h1 estiver na tela
  if (h1Top < window.innerHeight && mainBottom > 0) {
    const depth = Math.floor((window.scrollY - h1.offsetTop) * 0.09); // Multiplica para ajustar a velocidade do contador
    counter.textContent = Math.max(depth, 0); 
  }
});
