const element = document.querySelector(".gromar__content");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});

$('.growth__row').slick({
  dots: true,
infinite: false,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
});