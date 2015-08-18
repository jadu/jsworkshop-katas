'use strict';

var expect = require('chai').expect,
    sinon = require('sinon'),
    Adder = require('../src/Adder'),
    AddListener = require('../src/AddListener');

describe('AddListener', function () {
    beforeEach(function () {
        this.getElementById = sinon.stub();
        this.document = {
            getElementById: this.getElementById
        };
        this.numberField1 = document.createElement('input');
        this.numberField2 = document.createElement('input');
        this.resultField = document.createElement('input');
        this.addButton = document.createElement('button');
        this.getElementById.withArgs('number1').returns(this.numberField1);
        this.getElementById.withArgs('number2').returns(this.numberField2);
        this.getElementById.withArgs('result').returns(this.resultField);
        this.getElementById.withArgs('add').returns(this.addButton);

        this.adder = sinon.createStubInstance(Adder);
        this.listener = new AddListener(this.adder);
    });

    describe('listenTo()', function () {
        it('should display 8 when 3 is added to 5', function () {
            this.numberField1.value = 3;
            this.numberField2.value = 5;
            this.adder.add.withArgs(3, 5).returns(8);

            this.listener.listenTo(this.document);
            this.addButton.click();

            expect(this.resultField.value).to.equal('8');
        });

        it('should display 20 when 2 is added to 18', function () {
            this.numberField1.value = 2;
            this.numberField2.value = 18;
            this.adder.add.withArgs(2, 18).returns(20);

            this.listener.listenTo(this.document);
            this.addButton.click();

            expect(this.resultField.value).to.equal('20');
        });
    });
});
