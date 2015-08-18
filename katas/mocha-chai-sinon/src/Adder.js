'use strict';

function Adder() {

}

Adder.prototype.add = function (number1, number2) {
    return number1 + number2;
};

module.exports = Adder;
