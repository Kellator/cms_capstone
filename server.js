var express = require('express');
var app = express();
app.use(express.static('public'));

var socket_io = require('socket.io');
var http = require('http');

var server = http.Server(app);
// var io = socket_io(server);


app.listen(process.env.PORT ||8080);
//comment added for testing