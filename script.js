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
   if(currentIndex)(carouselImages.style.transform = `translateX(${index * -150}%)`);
}

function returne(currentIndex) {
  if (currentIndex > 4)
  nextButton.addEventListener('click', () => showSlide(currentIndex - 4));
  currentIndex = index
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1)); 
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));


returne(currentIndex)