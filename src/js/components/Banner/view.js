/** @jsx m */

'use strict';

let m = require('mithril'),
    LogoutComponent = require('../Logout/Logout');

module.exports = function(ctrl) {
    return <header class = {ctrl.size()}>
        <a href = '/#/about'>
            <h1>{ctrl.name()}</h1>
        </a>
        {ctrl.size() === 'small' ?
            <LogoutComponent />
        : null}
    </header>;
};
