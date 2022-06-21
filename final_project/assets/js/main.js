$(function () {
    //  burger & menu mobile ==================================================
    function toggleMenu() {
        $(".hamburger").toggleClass("is-active");
        $(".hamburger").removeClass("none");
        $(".menu-mobile").toggleClass("active");
        $(".menu-mobile_logo a").toggleClass("active");
        $("#overlay").toggleClass("open");
        $("body").toggleClass("hidden");
    }
    
    $(".hamburger, .menu-mobile_logo a, .menu-mobile_link, #overlay").on("click", function() {
        toggleMenu();
    })
    $(".hamburger").on("click", function() {
        $(this).addClass("none");
    })
})