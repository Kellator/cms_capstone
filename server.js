var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

var socket_io = require('socket.io');
var http = require('http');

var server = http.Server(app);
var io = socket_io(server);

//coordinates the connection to the database, and the running on the HTTP server
var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if(err && callback) {
            return callback(err);
        }
        
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:', + config.PORT);
            if(callback) {
                callback();
            }
        });
    });
};
//makes file both executable script and a module
if(require.main === module) {
    runServer(function(err) {
        if(err) {
            console.error(err);
        }
    });
};
//middlewares
var Client = require('./models/clients');

app.get('/', function(request, response) {
    return response.sendStatus(200);
});


exports.app = app;
exports.runServer = runServer;

//app.listen(process.env.PORT ||8080);
