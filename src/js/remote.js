'use strict';

//TODO: need different hosts for different compiled envs (dev, test, prod)
//TODO: need to breadcrumb

let m = require('mithril'),
    userId = m.prop(''),
    url;

    console.log(process.env.ENV);
    if(process.env.ENV === 'PROD') {
        url = 'http://localhost:3002';
    }
    else if(process.env.ENV === 'TEST') {
        url = 'http://localhost:3000';
    }
    //default to dev
    else {
        url = 'http://localhost:3001';
    }

function verifyUser() {
    if(!userId()) {
        m.request({
            method: 'GET',
            url: url + '/session/currentUser',
        }).then(function(res) {
            userId(res.user);
        }, function() {
            m.route('/login');
        });
    }
    return userId();
}

//auth on xhr req.extract
function checkAuthReq(res) {
    verifyUser();

    if(res.status === 403) {
        m.route('/login');
    }

    return res.response;
}

//api request, param: method and intended route
function apiReq(method, route) {
    return m.request({
        method: method,
        url: url + route,
        extract: checkAuthReq,
        config: function(xhr) {
            xhr.withCredentials = true;
        }
    });
}

module.exports.apiReq = apiReq;
