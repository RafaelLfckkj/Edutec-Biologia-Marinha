window.onload = function() {
    document.body.offsetHeight;  // Força o recálculo do layout
// Função para verificar a distância percorrida ao rolar
  window.addEventListener('scroll', function() {
  // Seleciona o primeiro h1 e o contador
    const h1 = document.getElementById("zone0");
    const counter = document.getElementById("depth");
    const midzone = document.getElementById("mz");
  // Verifica se o h1 e o contador foram encontrados
    if (h1 && counter) {
    // Obtém a distância entre o topo do h1 e o topo da janela de visualização
      const h1Top = h1.getBoundingClientRect().top;
      const midtop = midzone.getBoundingClientRect().top;
    // Define a profundidade inicial quando o h1 estiver na tela
      if (h1Top < window.innerHeight) {
        const depth = Math.floor((window.scrollY - h1.offsetTop) * 0.041); // Multiplica para ajustar a velocidade do contador
        counter.textContent = Math.max(depth, 0); 
    }
      if (midtop < window.innerHeight) {
        const depth = Math.floor((window.scrollY - midzone.offsetTop) * 0.053); // Multiplica para ajustar a velocidade do contador
        counter.textContent = Math.max(depth, 0); 
      }
  }

});
  window.scrollTo(0, document.body.scrollHeight);
};