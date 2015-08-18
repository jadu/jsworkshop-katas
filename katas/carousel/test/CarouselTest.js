'use strict';

var $ = require('jquery'),
    expect = require('chai').expect,
    Carousel = require('../src/Carousel');

describe('Carousel', function () {
    beforeEach(function () {
        this.$container = $('<ol><li id="slide1"></li><li id="slide2"></li><li id="slide3"></li></ol>');
        this.$nextButton = $('<button id="button--next">Next</button>');
        this.$previousButton = $('<button id="button--previous">Previous</button>');
        this.$slide1 = this.$container.find('#slide1');
        this.$slide2 = this.$container.find('#slide2');
        this.$slide3 = this.$container.find('#slide3');
        this.$slides = this.$slide1.add(this.$slide2).add(this.$slide3);

        this.$container.width(400);
        this.$slides.outerWidth(150);

        this.carousel = new Carousel(this.$slides,this.$nextButton,this.$previousButton);
    });

    describe('initialize()', function () {
        describe('when the carousel first loads', function () {
            it('should align the first item with the left side', function () {
                this.carousel.initialize();

                expect(this.$slide1.css('left')).to.equal('0px');
            });

            it('should align the second item', function () {
                this.carousel.initialize();

                expect(this.$slide2.css('left')).to.equal('150px');
            });

            it('should align the third item', function () {
                this.carousel.initialize();

                expect(this.$slide3.css('left')).to.equal('300px');
            });
        });

        describe('when we click "Previous"', function () {
            it('should align the last item with the left side',function(){
                this.carousel.initialize();

                this.$previousButton.click();
                expect(this.$slide3.css('left')).to.equal('0px');
            });

            it('should move the first slide to the left',function(){
                this.carousel.initialize();

                this.$previousButton.click();
                expect(this.$slide1.css('left')).to.equal('150px');
            });

            it('should move the second slide to the left',function(){
                this.carousel.initialize();

                this.$previousButton.click();
                expect(this.$slide2.css('left')).to.equal('300px');
            });
        });

        describe('when we click "Next"', function () {
            it('should align the second item with the left side', function () {
                this.carousel.initialize();

                this.$nextButton.click();

                expect(this.$slide2.css('left')).to.equal('0px');
            });
        });

        describe('when we click "Next" twice', function () {
            it('should align the third item with the left side', function () {
                this.carousel.initialize();

                this.$nextButton.click();
                this.$nextButton.click();

                expect(this.$slide3.css('left')).to.equal('0px');
            });
        });

        describe('when the last slide is shown and we click "Next"', function () {
            it('should align the first item with the left side', function () {
                this.carousel.initialize();

                this.$nextButton.click();
                this.$nextButton.click();
                this.$nextButton.click();

                expect(this.$slide1.css('left')).to.equal('0px');
            });

            it('should align the second item', function () {
                this.carousel.initialize();

                this.$nextButton.click();
                this.$nextButton.click();
                this.$nextButton.click();

                expect(this.$slide2.css('left')).to.equal('150px');
            });

            it('should align the third item', function () {
                this.carousel.initialize();

                this.$nextButton.click();
                this.$nextButton.click();
                this.$nextButton.click();

                expect(this.$slide3.css('left')).to.equal('300px');
            });
        });
    });
});
