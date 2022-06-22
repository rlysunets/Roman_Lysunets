new WOW().init();

let burger = document.querySelector(".hamburger");

burger.addEventListener("click",function () {
   burger.classList.toggle("is-active");
})

let menu = document.querySelector(".menu-mobile");

burger.addEventListener("click", function() {
   menu.classList.toggle("active");
})

