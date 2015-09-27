/** @jsx m */

'use strict';

let m = require('mithril');

module.exports = function(ctrl) {
    return <div id = 'logout'>
        <button onclick={ctrl.logout}> Logout {ctrl.logoutMessage()}</button>
    </div>;
};
