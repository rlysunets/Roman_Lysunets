$(function () {
//  burger & menu mobile ==============================================================
    function toggleMenu() {
        $(".hamburger").toggleClass("is-active");
        $(".menu-mobile").toggleClass("active");
        $("#overlay").toggleClass("open");
        $("body").toggleClass("hidden");
    } 

    $(".hamburger, .menu-mobile_link, #overlay").on("click", function() {
        toggleMenu();
    })

// light slider to intro section ========================================== 
    $("#intro_lightSlider").lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true,
        controls: false,
        auto: true,
        pause: 4000,
        speed: 700,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    });

// ajax for news.json =====================================================
    $.ajax({
        url: "assets/data/news.json",
        type: "get",
        dataType: "json",
        success: function (resp) {
            viewNews(resp);
        }
    });

//  function - shows news in HTML page ===================================
    function viewNews(news) {
        let html = "";

        news.forEach(item => {
            html += `
                <li class="new_item">
                    <div class="new_pic">
                        <img src="${item.image}" alt="new photo"/>
                    </div>
                    <div class="content">
                        <div class="content_title">${item.title}</div>
                        <div class="content_text">${item.text}</div>
                    </div>
                    <div class="author">
                        <div class="author_ava">
                            <img src="${item.author.avatar}" alt="author avatar"/>
                        </div>
                        <div class="author_info">
                            <div class="author_name">${item.author.name}</div>
                            <div class="date">${item.date}</div>
                        </div>
                    </div>
                </li>
            `
        });

        $(".news_slider").html(html);

// light slider for news section ============================================
        let newsSlider = $("#news_slider").lightSlider({
            item:3,
            loop:true,
            slideMove: 1,
            slideMargin: 30,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 1500,
            pause: 3000,
            auto: true,
            // adaptiveHeight: true,
            controls: false,
            responsive : [
                {
                breakpoint: 1100,
                settings: {
                    item: 2,
                    slideMove:1,
                    slideMargin:50,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        });
    
        $(".arrow_left").on("click", () => newsSlider.goToNextSlide());
        $(".arrow_right").on("click", () => newsSlider.goToPrevSlide());
    }

    // leaflet library ===========================================================
    function initMap() {
        
        const myIcon = L.icon({
            iconUrl: 'assets/images/map/Pin.svg',
            iconSize: [106, 106]
        });

        const map = L.map('map').setView([40.678564816138355, -73.9433614791599], 12);

        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.678564816138355, -73.9433614791599], {icon: myIcon}).addTo(map)
    }


    $("#load_map_link").on("click", function(e) {
        // e.preventDefault();
        e.stopPropagation();
        $("#map").html("");
        initMap();
    })


    // плавний скрол при кліку на лого  ===========================================
    $("a").on("click", function(e) {
        e.preventDefault();

        if($(this).attr("href") === "#") {
            $("html, body").animate({ scrollTop: 0 }, 500);
            $(".hamburger").removeClass("is-active");
            $(".menu-mobile").removeClass("active");
            $("#overlay").removeClass("open");
            $("body").removeClass("hidden");
        }
    })

    // плавний скрол при кліку меню  ===========================================
    $(".menu_link, .menu-mobile_link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top}, 500)
    })

    // плавний скрол при кліку на scroll  ===========================================
    $(".scroll").on("click", function(e) {
        e.preventDefault();

        const height = $(".intro").height();
        $("html, body").animate({scrollTop:height}, 500)
    })
})

    //  light gallery ============================================================
    // lightGallery(document.getElementById("gallery"));

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
    });


    




