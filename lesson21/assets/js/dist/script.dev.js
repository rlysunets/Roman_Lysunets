"use strict";

function toggleMenu() {
  $(".hamburger").toggleClass("is-active");
  $(".menu-mobile").toggleClass("active");
  $("#over_lay").toggleClass("open");
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 80) {
    $("#header").addClass("scroll");
  } else {
    $("#header").removeClass("scroll");
  }
});
$(function () {
  $(".hamburger, .menu-mobile_link, #over_lay").on("click", function () {
    toggleMenu();
  });
});