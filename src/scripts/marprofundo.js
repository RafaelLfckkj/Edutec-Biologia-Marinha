// Seleciona o elemento contador
const counter = document.getElementById('scroll-counter');
let scrollcount = 0;
// Inicializa o contador
// Função para atualizar o contador quando o usuário rolar a páginawindow.scroll({
window.addEventListener("scroll", (evento) => {
  scrollcount++;
});
onscroll = (evento) => {
  counter.innertext = scrollcount;
};