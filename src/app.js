const wrapper = document.querySelector(".carousel-wrapper");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-button.prev");
const nextBtn = document.querySelector(".carousel-button.next");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function updateCarousel() {
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Optional: Auto-slide every 3 seconds
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 3000);

// Pause auto-slide on hover
document
  .querySelector(".carousel-container")
  .addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

document
  .querySelector(".carousel-container")
  .addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 3000);
  });

// Initialize carousel
updateCarousel();
