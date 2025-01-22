//carousel
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('bg-gray-100', i === index);
    indicator.classList.toggle('bg-slate-800', i !== index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 2000); 
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.getElementById('prevBtn').addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  showSlide(currentIndex);
  startAutoSlide();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  stopAutoSlide();
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
  startAutoSlide();
});

indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    stopAutoSlide();
    currentIndex = parseInt(e.target.dataset.index);
    showSlide(currentIndex);
    startAutoSlide();
  });
});


showSlide(currentIndex);
startAutoSlide();