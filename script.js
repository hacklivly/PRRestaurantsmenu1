// script.js
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('[data-prev-btn]');
const nextBtn = document.querySelector('[data-next-btn]');

let currentIndex = 0; // Track the current slide index
const totalSlides = slider.children.length; // Total number of slides

// Go to the previous slide
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
  updateSlider();
});

// Go to the next slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
  updateSlider();
});

// Update the slider's position
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
