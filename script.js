
const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
  let currentSlide = 0;
  const images = slideshow.querySelectorAll('.post-image');

  const showSlide = slideIndex => {
    images.forEach((image, index) => {
      if (index === slideIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  };

  showSlide(currentSlide);

  setInterval(() => {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
  }, 3000);
});
