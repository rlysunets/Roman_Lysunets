function toggleMenu() {
   $(".hamburger").toggleClass("is-active");
   $(".menu-mobile").toggleClass("active");
   $("#overlay").toggleClass("open");
   $("body").toggleClass("hidden");
} 

$(function() {
    $(".hamburger, .menu-mobile_link, #overlay").on("click", function() {
       toggleMenu();
    })
})

$("#scroll, .hamburger").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop:741}, 500);
})

$(".header_logo").on("click", function(event) {
   event.preventDefault();
    $("html, body").animate({scrollTop:0}, 500);
    $(".menu-mobile").removeClass("active");
    $("#overlay").removeClass("open");
    $("body").removeClass("hidden");
    $(".hamburger").removeClass("is-active");
})

$(window).on("scroll", function () {
    if($(window).scrollTop() > 740) {
        $(".header").addClass("fixed");
    }
    else {
        $(".header").removeClass("fixed");
    }
})