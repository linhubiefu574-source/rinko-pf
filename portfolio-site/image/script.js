const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

button?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  button?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll(".work-slider").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const images = slider.querySelectorAll("img");
  const previousButton = slider.querySelector(".prev");
  const nextButton = slider.querySelector(".next");
  const count = slider.querySelector(".slider-count");

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    images.forEach((image, imageIndex) => {
      image.classList.toggle("is-active", imageIndex === currentIndex);
    });
    count.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  previousButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  showImage(0);
});
