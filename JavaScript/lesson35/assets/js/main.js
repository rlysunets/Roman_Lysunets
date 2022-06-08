$(function () {
    // ! tabs
    $(".tab").on("click", function () {
        //! шукаєм індекс кнопки по якій клікнули
        const index = $(this).index();
        //! вимикаем клас active на всіх табах і на всіх блоках з контентом
        $(".tab").removeClass("tab_active");
        $(".tab_block").removeClass("tab_block_active");
        //! додаєм клас active табу по якому клацнули
        $(this).addClass("tab_active");
        //! додаємо клас active блоку з індексом кнопки
        $(".tab_block").eq(index).addClass("tab_block_active");
    })


    //!dounat
    // https://www.jqueryscript.net/chart-graph/easy-pie-chart.html
    $('.chart').easyPieChart({
        barColor: '#1AE780',
        trackColor: '#B7BACD',
        scaleColor: '#dfe0e0',
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 3,
        trackWidth: undefined,
        size: 80,
        rotate: 0, // in degrees
        animate: {
        duration: 1000,
        enabled: true
        },
        easing: function (x, t, b, c, d) { // easing function
        t = t / (d/2);
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    });

    //! stars
    // https://github.com/nashio/star-rating-svg
    $(".my-rating").starRating({
        starSize: 25,
        initialRating: 1.5,
        emptyColor: "#8D91A3",
        ratedColor: "gold",
        starShape: "rounded"
    });

})
