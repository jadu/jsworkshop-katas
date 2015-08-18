'use strict';

var $ = require('jquery'),
    Carousel = require('./src/Carousel');

$(function () {
    new Carousel($('#container>li'), $('#nextButton'), $('#previousButton')).initialize();
});
