//настройки gulp======================================
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//подключение слайдера Swiper

new Swiper('.bottom-header__slider', {
    observer: true,
    observeParents: true,
    spaceBetween: 0,
    speed: 800,
    loop: true, 
    slidesPerView: 1,
    pagination: {
        el: '.bottom-header__pagination',
        clickable: true,
    },
    direction: 'vertical',


});

//Бургер=============================================
let topHeaderBurger = document.querySelector('.top-header__burger');
let topHeaderBurgerMenu = document.querySelector('.top-header__burger-menu'); 
let burgerHeader = document.querySelector('.burger-header'); 
topHeaderBurger.addEventListener("click", function (e) {
  topHeaderBurger.classList.toggle('_active');
  topHeaderBurgerMenu.classList.toggle('_active');
  burgerHeader.classList.toggle('_active');
});
