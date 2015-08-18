'use strict';

var $ = require('jquery'),
    expect = require('chai').expect,
    Accordion = require('../src/Accordion');

describe('Accordion', function () {
    beforeEach(function () {
        this.$container = $('<ul><li id="item1"></li><li id="item2"></li></ul>');
        this.$item1 = this.$container.find('#item1');
        this.$item2 = this.$container.find('#item2');
        this.$items = this.$item1.add(this.$item2);

        this.accordion = new Accordion(this.$items);
    });

    describe('initialize()', function () {
        describe('before any items are clicked', function () {
            it('should not have expanded any items', function () {
                this.accordion.initialize();

                expect(this.$items.filter('.expanded')).to.have.length(0);
            });
        });

        describe('when an item is clicked', function () {
            it('should expand the item', function () {
                this.accordion.initialize();

                this.$item1.click();

                expect(this.$item1.hasClass('expanded')).to.be.true;
            });
        });

        describe('when a second item is clicked', function () {
            it('should expand the second item',function(){
                this.accordion.initialize();
                this.$item1.click();
                this.$item2.click();

                expect(this.$item2.hasClass('expanded')).to.be.true;
            });

            it('should collapse the first item', function () {
                this.accordion.initialize();
                this.$item1.click();
                this.$item2.click();

                expect(this.$item1.hasClass('expanded')).to.be.false;
            });
        });

        describe('when an open item is clicked again', function () {
            it('should collapse that item', function () {
                this.accordion.initialize();
                this.$item1.click();
                this.$item1.click();

                expect(this.$item1.hasClass('expanded')).to.be.false;
            });
        });
    });
});
