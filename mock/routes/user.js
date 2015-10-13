var express = require('express'),
    router = express.Router(),
    loginController = require('../controllers/user/login'),
    logoutController = require('../controllers/user/logout'),
    infoController = require('../controllers/user/info');

router.get('/login', function(req, res, next) {
    if(!req.data) {
        res.send({
            status: 403,
            message: 'No credentials provided'
        });
    }
    else if(!req.data.username) {
        res.send({
            status: 403,
            message: 'No username provided.'
        });
    }
    else if(!req.data.password) {
        res.send({
            status: 403,
            message: 'No password provided'
        });
    }
    else {
        loginController(req.data.username, req.data.password).then(function(res) {
            res.send(res);
        });
    }
});

router.get('/logout', function(req, res, next) {
    if(!req.data) {
        res.send({
            status: 403,
            message: 'No credentials provided'
        });
    }
    else if(!req.data.token) {
        res.send({
            status: 403,
            message: 'No token provided'
        });
    }
    else {
        logoutController(req.data.token).then(function(res) {
            res.send(res);
        });
    }
});

router.get('/info', function(req, res, next) {
    if(!req.data) {
        res.send({
            status: 403,
            message: 'No credentials provided'
        });
    }
    else if(!req.data.token) {
        res.send({
            status: 403,
            message: 'No token provided'
        });
    }
    else {
        infoController(req.data.token).then(function(res) {
            res.send(res);
        });
    }
});

router.get('/current', function(req, res, next) {
    if(!req.data) {
        res.send({
            status: 403,
            message: 'No credentials provided'
        });
    }
    else if(!req.data.username) {
        res.send({
            status: 403,
            message: 'No username provided.'
        });
    }
    else if(!req.data.password) {
        res.send({
            status: 403,
            message: 'No password provided'
        });
    }
    else {
        loginController(req.data.username, req.data.password).then(function(res) {
            res.send(res);
        });
    }
});

module.exports = router;
