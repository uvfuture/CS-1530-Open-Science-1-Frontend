'use strict';

var express = require('express'),
    path = require('path'),
    app = express();
//config
app.port = 3000;
app.use(express.static(path.join(__dirname, '/src/dist/')));
//index
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/dist/views/index.html'));
});
//server error
app.use(function(err, req, res) {
    res.send({
        message: err.message,
        error: err
    });
});
//server
var server = require('http').createServer(app);
server.listen(app.port, function() {
    console.log('Server listening on port ' + app.port);
});
