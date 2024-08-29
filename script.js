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