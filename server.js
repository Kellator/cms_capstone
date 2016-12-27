var express = require('express');
var app = express();
app.use(express.static('public'));

var socket_io = require('socket.io');
var http = require('http');

var server = http.Server(app);
var io = socket_io(server);

app.get('/', function(request, response) {
    return response.sendStatus(200);
});


exports.app = app;

app.listen(process.env.PORT ||8080);
