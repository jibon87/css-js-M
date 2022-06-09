(function ($) {
    "use strict";
    // for hidden contextmunu
        //    document.addEventListener("contextmenu",(jibon)=>{
        //     jibon.preventDefault();
        //    });

    // multifull countdown
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="time-count">%D <span>DAY</span></div><div class="time-count">%H <span>Hour</span></div><div class="time-count">%M <span>Minute</span></div><div class="time-count">%S <span>Second</span></div>'));
        });
    });

    // nice select
    $(".select").niceSelect();

    // jquery-bg
    $("*[data-background-image]").each(function () {
        $(this).css({
            "background-image": "url(" + $(this).data("background-image") + ")",
        });
    });

    // for img zoom
    $("#zoom_01").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
    });

    //magnificPopup
    $("#open-popup").magnificPopup({
        items: [
            {
                src: "../img/slider-4.jpg",
                type: "image",
            },
            {
                src: "../img/slider-3.jpg",
                type: "image",
            },
            {
                src: "../img/slider-5.jpg",
                type: "image",
            },
            {
                src: "https://www.youtube.com/watch?v=L6CpfyOHPoc",
                type: "iframe", // this overrides default type
            },
        ],
        gallery: {
            enabled: true,
        },
        type: "image", // this is a default type
    });

    //counterUp
    $(".counter").counterUp({
        delay: 10,
        time: 700,
    });

    // dark mood js
    const btn = document.querySelector(".btn-toggle");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("dd").src = "img/sun.png";
    } else {
        document.getElementById("dd").src = "img/moon.png";
    }

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.getElementById("dd").src = "img/moon.png";
        let theme = "light";

        if (document.body.classList.contains("dark-theme")) {
            theme = "dark";
            document.getElementById("dd").src = "img/sun.png";
        }
        localStorage.setItem("theme", theme);
    });

    
})(jQuery);
