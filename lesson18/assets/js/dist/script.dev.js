"use strict";

var burger = document.querySelector(".hamburger");
burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
});
var menu = document.querySelector(".menu-mobile");
burger.addEventListener("click", function () {
  menu.classList.toggle("active");
});