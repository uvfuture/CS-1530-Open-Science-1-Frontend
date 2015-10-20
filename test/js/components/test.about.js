let test = require('tape'),
    component = require('../../src/js/components/About/About'),
    controller = require('../../../src/js/components/About/controller'),
    model = require('../../../src/js/components/About/model'),
    view = require('../../../src/js/components/About/view');

test('component-check', function (t) {
    t.plan(2);

    //TODO: test that the controller and model are wired up correctly

    t.equal(component.controller, typeof function);

    /* testing async, say, with mock libs
    //no for About, but maybe for, say, user interaction
    x.beep(function (err, res) {
        t.equal(res, 'boop');
    });
    */
})
