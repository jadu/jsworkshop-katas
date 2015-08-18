'use strict';

function AddListener(adder) {
    this.adder = adder;
}

AddListener.prototype.listenTo = function (document) {
    var listener = this,
        numberField1 = document.getElementById('number1'),
        numberField2 = document.getElementById('number2'),
        resultField = document.getElementById('result'),
        addButton = document.getElementById('add');

    addButton.addEventListener('click', function () {
        var number1 = parseFloat(numberField1.value),
            number2 = parseFloat(numberField2.value),
            result = listener.adder.add(number1, number2);

        resultField.value = result;
    });
};

module.exports = AddListener;
