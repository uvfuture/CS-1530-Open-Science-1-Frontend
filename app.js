'use strict';

var express = require('express'),
    path = require('path'),
    app = express(),
    staticDir;
//envs
if(process.env.ENV === 'PROD') {
    staticDir = '/dist/';
}
else if(process.env.ENV === 'TEST') {
    staticDir = '/src/dist/';
}
//default to dev
else {
    staticDir = '/src/dist/';
}
//config
app.port = 3000;
app.use(express.static(path.join(__dirname, staticDir)));
//index
app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, staticDir, '/views/index.html'));
});
//server
var server = require('http').createServer(app);
server.listen(app.port, function() {
    console.log('Server listening on port ' + app.port);
});
