'use strict';

var expect = require('chai').expect,
    Adder = require('../src/Adder');

describe('Adder', function () {
    describe('add()', function () {
        it('should return 4 when 1 is added to 3', function () {
            var adder = new Adder();

            expect(adder.add(1, 3)).to.equal(4);
        });

        it('should return 6 when 4 is added to 2', function () {
            var adder = new Adder();

            expect(adder.add(4, 2)).to.equal(6);
        });
    });
});
