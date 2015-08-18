'use strict';

function AddListener(adder) {
    this.adder = adder;
}

AddListener.prototype.listenTo = function (document) {
    var self = this;

    document.getElementById('add').addEventListener('click',function(){
        var number1 = document.getElementById('number1'),
            number2 = document.getElementById('number2'),
            result = document.getElementById('result');

        result.value = self.adder.add(parseFloat(number1.value), parseFloat(number2.value));
    });

};

module.exports = AddListener;
