const depthElement = document.getElementById('depth');

// Função para atualizar a profundidade com base no scroll
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY; // Posição do scroll
  let depth = Math.floor(scrollPosition * 10); // Aumenta a profundidade conforme o scroll
  depthElement.textContent = depth;
});