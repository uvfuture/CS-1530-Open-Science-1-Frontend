/** @jsx m */

'use strict';

let m = require('mithril'),
    BannerComponent = require('../Banner/Banner');

module.exports = function(ctrl) {
    return <div id = 'about' class='container-fluid'>
        <BannerComponent size='large'/>
        <div class = 'main row'>
            <div class = 'inner'>
                <div class = 'content'>
                    {ctrl.aboutParagraphs().map(function (paragraph) {
                            return <p> {paragraph} </p>
                    })}
                    <a href = '/#/login'> Log in </a>
                </div>
            </div>
        </div>
    </div>;
};
