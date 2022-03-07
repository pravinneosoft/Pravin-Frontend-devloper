const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
