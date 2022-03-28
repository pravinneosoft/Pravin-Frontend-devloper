const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
$('.owl-carousel').owlCarousel({
  loop:true,
  items:1,
  dot:true,
  margin:10,
  nav:true,
})