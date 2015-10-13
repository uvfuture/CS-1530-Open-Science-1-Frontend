var express = require('express'),
    router = express.Router(),
    createController = require('../controllers/job/create'),
    deleteController = require('../controllers/job/delete');

router.get('/create', function(req, res, next) {
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
        createController(req.data.token).then(function(res) {
            res.send(res);
        });
    }
});

router.get('/delete', function(req, res, next) {
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
        deleteController(req.data.token).then(function(res) {
            res.send(res);
        });
    }
});

module.exports = router;
