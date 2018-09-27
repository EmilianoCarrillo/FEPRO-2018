// COUNTDOWN TIMER
// var deadline = new Date("Sep 13, 2018 10:00:00").getTime();
// var x = setInterval(function() {
// var now = new Date().getTime();
// var t = deadline - now;
// var days = Math.floor(t / (1000 * 60 * 60 * 24));
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((t % (1000 * 60)) / 1000);
// document.getElementById("dias").innerHTML = days + " días";
// document.getElementById("horas").innerHTML = hours + " horas";
// document.getElementById("minutos").innerHTML = minutes + " minutos";
// }, 1000);



//


(function() {

  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var brand = document.querySelector('.menu__brand');
    var menuItems = document.querySelectorAll('.menu__item');

    var active = false;

    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');
        brand.classList.add('menu__brand--active');
        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }

        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        brand.classList.remove('menu__brand--active');
        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }

        active = false;
      }
    };

    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

  Menu.init();

}());


$(".menu__link").on("click", function(){
  $(".burger").click();
});
