'use strict';

/*var Adder = require('./src/Adder'),
    AddListener = require('./src/AddListener'),
    adder = new Adder(),
    addListener = new AddListener(adder);

accordionListener.listenTo(document);*/
var $ = require('jquery'),
    Accordion = require('./src/Accordion');

$(function () {
    new Accordion($('.accordion__item')).initialize();
});
