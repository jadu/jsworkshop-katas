'use strict';
var $ = require('jquery');

function Accordion($items) {
    this.$items = $items;
}

Accordion.prototype.initialize = function () {
    var self = this;
    this.$items.on('click', function () {
        if($(this).hasClass('expanded')){
            $(this).removeClass('expanded');
        } else {
            self.$items.removeClass('expanded');
            $(this).addClass('expanded');
        }

    });
};

module.exports = Accordion;
