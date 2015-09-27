/** @jsx m */

'use strict';

let m = require('mithril'),
    BannerComponent = require('../Banner/Banner');

module.exports = function(ctrl) {
    return <div id = 'error'>
        <BannerComponent size='large' />
        <div class = 'main'>
            <div class = 'inner'>
                <div class = 'content'>

                    <h2>{ctrl.status()}</h2>
                    <p>{ctrl.message()}</p>
                </div>
            </div>
        </div>
    </div>;
};
