let currentIndex = 0;

function updateCarousel() {
  const container = document.querySelector('.image-container');
  const totalImages = document.querySelectorAll('.image-container img').length;
  const imageWidth = document.querySelector('.carousel').offsetWidth;
  
  container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function nextImage() {
  const totalImages = document.querySelectorAll('.image-container img').length;
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function prevImage() {
  const totalImages = document.querySelectorAll('.image-container img').length;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Ajustar la posición en caso de cambiar el tamaño de la ventana
window.addEventListener('resize', updateCarousel);
