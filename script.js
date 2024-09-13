const prevButton = document.querySelector('.seta-esquerda');
const nextButton = document.querySelector('.seta-direita');
const carouselImages = document.querySelector('.carroselimg');
const carouselItems = document.querySelectorAll('.peixes-c');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0);
  if (index > carouselItems.length);
  currentIndex = index;
  carouselImages.style.transform = `translateX(-${index * 150}%)`;
  if(index <= -1) {
    (carouselImages.style.transform = `translateX(${index * 450}%)`);
    index = 3;
    currentIndex = index;
  }
  while (index > 3){
    if(index > 3) {
      (carouselImages.style.transform = `translateX(${index / 300}%)`);

    }else if (index > carouselItems.length) {
      carouselImages.style.transform = `translateX(-${index * 150}%)`;
    }
    index = 0;
    currentIndex = index;
  }
  console.log(currentIndex)
  console.log(index)
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1)); 
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));


function redirecionarParanot1() {
  window.open('https://g1.globo.com/es/espirito-santo/noticia/2024/02/24/video-novo-ecossistema-marinho-com-recife-de-ate-60-metros-de-altura-e-descoberto-na-costa-do-es.ghtml', '_blank');
}

function redirecionarParanot2() {
   window.open('https://jornal.usp.br/radio-usp/biotecnologia-marinha-e-uma-importante-estrategia-de-utilizacao-sustentavel-do-oceano/#:~:text=%E2%80%9CO%20oceano%20estabiliza%20o%20clima,o%20uso%20sustent%C3%A1vel%20do%20oceano.', '_blank');
}


function redirecionarquemsomos() {
 window.location.href = '..//src/pages/quem-somos.html' ; 
}