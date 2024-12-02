// script.js
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('[data-prev-btn]');
const nextBtn = document.querySelector('[data-next-btn]');

let currentIndex = 0; // Current slide index
const totalSlides = slider.children.length; // Total number of slides

// Previous button functionality
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
  updateSlider();
});

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
  updateSlider();
});

// Update the slider position
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
