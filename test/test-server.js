global.DATABASE_URL = 'mongodb://localhost/cms_capstone-test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var Client = require('../models/clients');
var User = require('../models/users');
var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('alcis', function() {
    it('exists', function(done) {
        chai.request(app)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(201);
            done();
        });
    });
});


// describe('Client DB', function() {
//     //add before(function(done) { with hard coded data? then after(function(done) {remove
//     before(function(done) {
//         server.runServer(function() {
//             Client.create({ contact: {
//                     contactName: {
//                         contactFirstName: "John",
//                         contactLastName: "Jones"
//                     },
//                     contactPrimaryPhone: "555-888-5858",
//                     contactSecondaryPhone: "888-555-8585",
//                     contactAddress: {
//                         contactStreet: "42 World's End Way",
//                         contactCity: "Carver",
//                         contactState: "MA",
//                         contactZip: "02024"
//                     },
//                     contactEmail: "JohnJones@myEmail.com",
//                     relToProspect: "adult child",
//                     referralSource: "APFM",
//                     referredBy: "Michelle",
//                     dateOfFirstContact: 20170101, function() {
//                 done();
//                     }
//                 }
//             });
//         });
//     });
//     after(function(done) {
//         Client.remove(function() {
//             done();
//         });
//     });
// });
//     it('returns status 201', function(done) {
//         chai.request(app)
//         .get("/alcis/clients/")
//         .end(function(err, res) {
//             should.equal(err, null);
//             res.should.have.status(201);
//             res.body.should.be.a('object');
//             done();
//         });
//     });
//     it('should add an item on POST', function(done) {
//         chai.request(app)
//             .post('/alcis/clients/')
//             .send({'client_id' : 'client_id'})
//             // .send({ "contact": {
//             //             "contactName": {
//             //                 "contactFirstName": "John",
//             //                 "contactLastName": "Winchester"
//             //             },
//             //             "contactPrimaryPhone": 2475558967,
//             //             "contactSecondaryPhone": 7425557698,
//             //             "contactAddress": {
//             //                 "contactStreet": "12 Banal St.",
//             //                 "contactCity": "Lawrence",
//             //                 "contactState": "KS",
//             //                 "contactZip": 74589
//             //             },
//             //             "contactEmail": "killItWithFire@myEmail.com",
//             //             "relToProspect": "adult child",
//             //             "referralSource": "APFM",
//             //             "referredBy": "Ellen",
//             //             "dateOfFirstContact": 20170101
//             //             }
//                         // })
//             .end(function(err, res) {
//                 should.equal(err, null);
//                 res.should.have.status(201);
//                 res.should.be.json;
//                 done();
//             });
//         });
