const prevButton = document.querySelector('.seta-esquerda');
const nextButton = document.querySelector('.seta-direita');
const carouselImages = document.querySelector('.carroselimg');
const carouselItems = document.querySelectorAll('.peixes-c');
const crust = document.querySelector('.Crustaceos-gallery')
let currentIndex = 0;

function showSlide(index) {
  if (index < 0);
  if (index > carouselItems.length);
  currentIndex = index;
  carouselImages.style.transform = `translateX(-${index * 150}%)`;
  
   if(index > 4)
     (carouselImages.style.transform = `translateX(${index / 300}%)`);
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1)); 
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));