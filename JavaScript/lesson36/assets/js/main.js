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
                breakpoint:900,
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
    let slider_partners = $("#partners_lightSlider").lightSlider({
        item:9,
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
                    item:7,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:6,
                    slideMove:1,
                    slideMargin:15,
                  }
            },
            {
                breakpoint:560,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove: 2,
                  }
            }
        ]
    }); 
    $(".list-prev").click(function(){
        slider.goToPrevSlide(); 
        slider_partners.goToPrevSlide(); 
    });
    $(".list-next").click(function(){
        slider.goToNextSlide();
        slider_partners.goToNextSlide(); 
    });
});