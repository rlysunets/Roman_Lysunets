$(function () {
    function toggleMenu() {
        $(".hamburger").toggleClass("is-active");
    } 

    $(".hamburger").on("click", function() {
        toggleMenu();
    })
    
    $("#promo_lightSlider").lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop: true,
        controls: false,
        auto: true,
        pause: 3500
    })

    let slider = $("#new_arrivals_lightSlider").lightSlider({
        item:5,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: false,
        slideMargin: 20,
        responsive: [
            {
                breakpoint:992,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:2,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    // slideMove: 1,
                  }
            }
        ]
    });  
    $(".new_arrivals_list-prev").click(function(){
        slider.goToPrevSlide(); 
    });
    $(".new_arrivals_list-next").click(function(){
        slider.goToNextSlide(); 
    });


});