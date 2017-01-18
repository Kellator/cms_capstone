var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');

var app = express();
var bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(express.static('public'));

var http = require('http');

var server = http.Server(app);
//middlewares
var Client = require('./models/clients');
var User = require('./models/users');
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
}
//performs initial search of collection based on search name criteria and retrieves list of clients from collection
app.get('/clients', function(req, res) {
    var searchFirstName = req.query.firstName;
    var searchLastName = req.query.lastName;
//     Client.find({ $and: [ {'contact.contactName.contactLastName' : searchLastName}, {'contact.contactName.contactFirstName' : searchFirstName}]}).exec(function(err, clients) {
//     // Client.find( {'contact.contactName.contactLastName' : { $regex: new RegExp('^' + searchLastName.toLowerCase()) } }).exec(function(err, clients) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//             message: 'Internal Server Error'
//             });
//         }
//         res.json(clients);
//     });
// });
//test find
    Client.find().exec(function(err, clients) {
        if (err) {
            console.log(err);
            return res.status(500).json({
            message: 'Internal Server Error'
            });
        }
        res.json(clients);
    });
});
//api endpoint to retrieve client document from collection for search list results
app.get('/clients/:client_id', function(req, res) {
    var client_id = req.params.client_id;
    Client.findById(client_id, function(err, client) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.send(client);
    });
});
//creates new document for the collection
app.post('/clients/', function(req, res) {
    console.log(req.body);
    console.log('POST: ');
    var client = req.body;
    console.log(client._id);
    Client.create(client, function(err, client) {
        if (err || !client) {
            console.error("could not create client");
            console.log(err);
            return res.status(500).json({message: 'Internal Server Error'});
        }
        console.log("created client " + client._id);
        res.status(201).json(client);
    });
});
//makes a change to an existing document in the collection
app.put('/clients/:client_id', function(req, res) {
    console.log(req.params);
    console.log(req.body);
    var client_id = req.params.client_id;
    var update = req.body;
    Client.findByIdAndUpdate(client_id, update, function(err, clients) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.status(201).json(clients);
    });
});
//deletes and item from the collection (will eventually update a key 'deleted' to TRUE so all clients remain in db but are not displayed if inactive)
app.delete('/clients/:client_id', function(req, res) {
    var client_id = req.params.client_id;
    console.log(req.params);
    Client.findByIdAndRemove(client_id, function(err, client) {
        if (err) {
            console.log(err);
            console.error('could not delete client');
        }
        console.log('client deleted');
        return res.status(204).end();
    });
});
app.use('*', function(req, res) {
    res.status(404).json({
        message: 'Not Found'
    });
});
//userName & password endpoints
app.post('/users', function(req,res) {
    if (!req.body) {
        return res.status(400).json({
            message: "No Request Body"
        });
    }
    if (!('username' in req.body)) {
        return res.status(422).json({
            message: "Missing Field: username"
        });
    }
    var username = req.body.username;
    if (typeof username !== 'string') {
        return res.status(422).json({
            message: "Incorrect Field Type: username'"
        });
    }
    username = username.trim();
    if (username === '') {
        return res.status(422).json({
            message: "Incorrect Field Length: username"
        });
    }
    var password = req.body.password;
    if (typeof password !=='string') {
        return res.status(422).json({
            message: "Incorrect Field Type: password"
        });
    }
    password = password.trim();
    if (password === '') {
        return res.status(422).json({
            message: "Incorrect Field Length: password"
        });
    }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
            var user = new User ({
                username: username,
                password: hash
            });
            user.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        message: "Internal Server Error"
                    });
                }
                return res.status(201).json({});
            });
        });
    });
});
exports.app = app;
exports.runServer = runServer;

// Client.create(sampleData_2, function(err, client) {
//             if (err || !client) {
//                 console.error("could not create client"); //example has , name
//             }
//             console.log("created client"); //example has snippet.name
//         });
// Client.create(sampleData_3, function(err, client) {
//     if (err || !client) {
//         console.error("could not create client"); //example has , name
//     }
//     console.log("created client"); //example has snippet.name
// });
// var client_id = '587c42f8fd17e87044272de7'
//     Client.findOneAndRemove(client_id, function(err, client) {
//         if (err) {
//             console.error('could not delete client');
//         }
//         console.log('client deleted');
//     });


//app.listen(process.env.PORT ||8080);
// var sampleData = {
//     "deleted": false,
//     "contact": {
//         "contactName": {
//             "contactLastName": "Last Name",
//             "contactFirstName": "First Name"
//         },
//         "contactPrimaryPhone": "5085885334", //10-digit numbers only
//         "contactSecondaryPhone": "5085885334",
//         "contactAddress": {
//             "contactStreet": "Street Address",
//             "contactCity": "City",
//             "contactState": "State",
//             "contactZip": "02301"
//         },
//         "contactEmail": "contactemail@gmail.com",
//         "relationToProspect": "relationship to prospect", //radio with adult child, spouse, friend, guardian, etc
//         "referralSource": "Referral Source",
//         "referredBy": "Referred By",
//         "dateOfFirstContact": "2017-01-01" //use date function
//     },
// };
// var sampleData_2 = {
//     "deleted": false,
//     "contact": {
//         "contactName": {
//             "contactLastName": "Standish",
//             "contactFirstName": "Myles"
//         },
//         "contactPrimaryPhone": "3333333333", //10-digit numbers only
//         "contactSecondaryPhone": "0",
//         "contactAddress": {
//             "contactStreet": "194 Cranberry Rd.",
//             "contactCity": "Carver",
//             "contactState": "MA",
//             "contactZip": "02330"
//         },
//         "contactEmail": "MStandish@gmail.com",
//         "relationToProspect": "friend", //radio with adult child, spouse, friend, guardian, etc
//         "referralSource": "friend",
//         "referredBy": "John Smith",
//         "dateOfFirstContact": "2017-01-01" //use date function
//     },
// };
// var sampleData_3 = {
//     "deleted": false,
//     "contact": {
//         "contactName": {
//             "contactLastName": "Smith",
//             "contactFirstName": "John"
//         },
//         "contactPrimaryPhone": "3333333333", //10-digit numbers only
//         "contactSecondaryPhone": "0",
//         "contactAddress": {
//             "contactStreet": "143 Pocahontas Way",
//             "contactCity": "Plymouth",
//             "contactState": "MA",
//             "contactZip": "02360"
//         },
//         "contactEmail": "JSmith.theOriginal@gmail.com",
//         "relationToProspect": "self", //radio with adult child, spouse, friend, guardian, etc
//         "referralSource": "APFM",
//         "referredBy": "Maureen",
//         "dateOfFirstContact": "2017-01-01" //use date function
//     },
// };  
// var sampleData_4 = {
//     "deleted": true,
//     "contact": {
//         "contactName": {
//             "contactLastName": "Johnson",
//             "contactFirstName": "Howard"
//         },
//         "contactPrimaryPhone": "7815856581", //10-digit numbers only
//         "contactSecondaryPhone": "0",
//         "contactAddress": {
//             "contactStreet": "23 Summer St.",
//             "contactCity": "Kingston",
//             "contactState": "MA",
//             "contactZip": "02364"
//         },
//         "contactEmail": "HoJo@gmail.com",
//         "relationToProspect": "self", //radio with adult child, spouse, friend, guardian, etc
//         "referralSource": "APFM",
//         "referredBy": "Maureen",
//         "dateOfFirstContact": "2017-01-01" //use date function
//     },
// }; 