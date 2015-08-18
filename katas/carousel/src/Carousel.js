'use strict';

function Carousel($slides, $nextButton, $previousButton) {
    this.$slides = $slides;
    this.$nextButton = $nextButton;
    this.$previousButton = $previousButton;
}

Carousel.prototype.initialize = function () {
    var carousel = this,
        slideIndex = 0,
        numSlides = carousel.$slides.length;

    function alignSlides() {
        var i,
            offset = 0,
            $slide;

        for (i = slideIndex; i < numSlides; i++) {
            $slide = carousel.$slides.eq(i);
            $slide.css('left', offset);
            offset += $slide.outerWidth();
        }

        for (i = 0; i < slideIndex; i++) {
            $slide = carousel.$slides.eq(i);
            $slide.css('left', offset);
            offset += $slide.outerWidth();
        }
    }

    this.$nextButton.on('click', function () {
        slideIndex = (slideIndex + 1) % numSlides;

        alignSlides();
    });

    this.$previousButton.on('click', function () {
        slideIndex--;

        if (slideIndex === -1) {
            slideIndex = numSlides - 1;
        }

        alignSlides();
    });

    alignSlides();
};

module.exports = Carousel;
