/**
 * index.js
 * - All our useful JS goes here, awesome!
 Maruf-Al Bashir Reza
 */

$(document).ready(function ($) {
    function animateElements() {
        $(".progressbar").each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find(".circle").attr("data-percent");
            var round = Math.round(percent); // for round
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data("animate");
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data("animate", true);
                $(this)
                    .find(".circle")
                    .circleProgress({
                        startAngle: -Math.PI / 2,
                        value: round / 100,
                        thickness: 10, // for progress width mju*-+
                        
                        fill: {
                            color: "#0526fa", // for fill-color(yellow)   --> js/round-progressbar.min.js     > search [ emptyFill ]
                        },
                    })
                    .on("circle-animation-progress", function (event, progress, stepValue) {
                        $(this)
                            .find("div")
                            .text((stepValue * 100).toFixed(1) + "%");
                    })
                    .stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});
