'use strict';

var Adder = require('./src/Adder'),
    AddListener = require('./src/AddListener'),
    adder = new Adder(),
    addListener = new AddListener(adder);

addListener.listenTo(document);
