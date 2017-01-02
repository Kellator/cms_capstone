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
var User = require('./models/users');
//api endpoint definition
//retrieves list of clients from collection
app.get('/clients', function(req, res) {
    Client.find().exec(function(err, clients) {
        if (err) {
            return res.status(500).json({
            message: 'Internal Server Error'
            });
        }
        res.json(clients);
    });
});
//api endpoint to retrieve client document from collection
app.get('/clients/:client_id', function(req, res) {
    console.log('you made it to client_id');
    Client.findOne().exec(function(err, client) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.json(client);
    });
})
app.post('/clients/', function(req, res) {
    var create = function(ClientDataPackage) {
        console.log(ClientDataPackage);
        var client = ClientDataPackage
                //constructor function - outside of this code - whereever calling create from - new client
                //specific data like id? contact name? contact number? etc
        ;
        Client.create(client, function(err, client) {
            if (err || !client) {
                console.error("could not create client"); //example has , name
                mongoose.disconnect();
                return res.status(500).json({message: 'Internal Server Error'});
            }
            console.log("created client"); //example has snippet.name
            res.status(201).json(client);
            mongoose.disconnect();
        });
    };
});
app.use('*', function(req, res) {
    res.status(404).json({
        message: 'Not Found'
    });
});
var sampleData =         {
            "contact": {
                "contactName": {
                    "contactLastName": "Last Name",
                    "contactFirstName": "First Name"
                },
                "contactPrimaryPhone": "5085885334", //10-digit numbers only
                "contactSecondaryPhone": "5085885334",
                "contactAddress": {
                    "contactStreet": "Street Address",
                    "contactCity": "City",
                    "contactState": "State",
                    "contactZip": "02301"
                },
                "contactEmail": "contactemail@gmail.com",
                "relationToProspect": "relationship to prospect", //radio with adult child, spouse, friend, guardian, etc
                "referralSource": "Referral Source",
                "referredBy": "Referred By",
                "dateOfFirstContact": "2017-01-01" //use date function
            },

    }
    
// Client.create(sampleData, function(err, client) {
//             if (err || !client) {
//                 console.error("could not create client"); //example has , name
//                 mongoose.disconnect();

//             }
//             console.log("created client"); //example has snippet.name

//             mongoose.disconnect();
//         });
exports.app = app;
exports.runServer = runServer;

//app.listen(process.env.PORT ||8080);
