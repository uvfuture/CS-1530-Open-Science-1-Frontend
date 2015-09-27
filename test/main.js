'use strict';

var test = require('tape');

test('arithmitic test', function (t) {
    t.plan(2);
    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
});

module.exports = test;
