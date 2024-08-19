const prevButton = document.querySelector('.seta-esquerda');
const nextButton = document.querySelector('.seta-direita');
const carouselImages = document.querySelector('.carroselimg');
const carouselItems = document.querySelector('.peixes-c');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = carouselItems.length - 1;
  if (index >= carouselItems.length) index = 0;
  currentIndex = index;
  carouselImages.style.transform = `translateX(-${index * 150}%)`;
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));  nextButton.addEventListener('click', () => showSlide(currentIndex + 1));