var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();
var bcrypt = require('bcryptjs');
var http = require('http');
var cookieParser = require('cookie-parser');
var server = http.Server(app);
var session = require('express-session');
var flash = require("connect-flash");
//middlewares
var Client = require('./models/clients');
var User = require('./models/users');
//Local Authentication
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//coordinates the connection to the database, and the running on the HTTP server
var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen(config.PORT, function() {
            console.log('Listening on localhost:', +config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};
//makes file both executable script and a module
if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findByUsername(username, function(err, user) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            user.validatePassword(password, function(err) {
                if (err) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user);
            });
        });
    }
));
//authenticated session persistance
passport.serializeUser(function(user, callback) {
    console.log("serialize");
    callback(null, user.id);
});
passport.deserializeUser(function(id, callback) {
    console.log("deserialize");
    User.findById(id, function(err, user) {
        if (err) {
            return callback(err);
        }
        callback(null, user);
    });
});
app.use(bodyParser.json());
app.use(express.static('public'));
// passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
    secret: 'pickle relish',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
//userName & password endpoints
//creating a username & password (admin level)
app.post('/alcis/users', function(req, res) {
    console.log(req.body);
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
    console.log(username);
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
    console.log(password);
    if (typeof password !== 'string') {
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
            console.log(err);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
            var user = new User({
                username: username,
                password: hash
            });
            console.log(user);
            user.save(function(err) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: "Internal Server Error"
                    });
                }
                return res.status(201).json({});
            });
        });
    });
});
//log in authentication request
app.post('/alcis/login', passport.authenticate('local'), function(req, res) {
    console.log(req.body);
    res.status(200).json({
        status: 'Login successful!'
    });
});
//log out of alcis
app.get('/alcis/logout', function(req, res) { 
    req.logout();
    res.redirect('/');
});
//client (customer) database endpoints
//creates new document for the collection
app.post('/alcis/clients/', function(req, res) {
    console.log(req.body);
    console.log('POST: ');
    var client = req.body;
    console.log(client._id);
    Client.create(client, function(err, client) {
        if (err || !client) {
            console.error("could not create client");
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log("created client " + client._id);
        res.status(201).json(client);
    });
});
//performs initial search of collection based on search name criteria and retrieves list of clients from collection
app.get('/alcis/clients', function(req, res) {
    var searchFirstName = req.query.firstName;
    var searchLastName = req.query.lastName;
    console.log(req.query);
    if (searchFirstName == "" && searchLastName == "") {
        Client.find().exec(function(err, clients) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            res.json(clients);
        });
    }
    else { 
        if (!searchLastName) {
            Client.find({
                'contact.contactName.contactFirstName': searchFirstName
            }).exec(function(err, clients) {
                if (err) {
                    console.log(err);
                    console.log('cannot search by first name');
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                res.json(clients);
            });
        }
        if (!searchFirstName) {
            Client.find({
                'contact.contactName.contactLastName': searchLastName
            }).exec(function(err, clients) {
                if (err) {
                    console.log(err);
                    console.log('cannot search by last name');
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                res.json(clients);
            });
        }
        if (searchFirstName && searchLastName) {
            Client.find({
                $and: [{
                    'contact.contactName.contactLastName': searchLastName
                }, {
                    'contact.contactName.contactFirstName': searchFirstName
                }]
            }).exec(function(err, clients) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }
                res.json(clients);
            });
        }
    }
});
//endpoint to retrieve client document from collection for search list results
app.get('/alcis/clients/:client_id', function(req, res) {
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
//makes a change to an existing document in the collection
app.put('/alcis/clients/:client_id', function(req, res) {
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
app.delete('/alcis/clients/:client_id', function(req, res) {
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
exports.app = app;
exports.runServer = runServer;
// var client_id = '587ec4c2be5a2261d968b874'
//     Client.findOneAndRemove(client_id, function(err, client) {
//         if (err) {
//             console.error('could not delete client');
//         }
//         console.log('client deleted');
//     });
