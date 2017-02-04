global.DATABASE_URL = 'mongodb://localhost/cms_capstone-test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var Client = require('../models/clients');
var User = require('../models/users');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('ALCIS', function() {
this.timeout(3000);
// before(function(done) {
//     server.runServer(function() {
//         Client.create({
//             "contact": {
//                 "contactName": {
//                     "contactLastName": "Standish",
//                     "contactFirstName": "Myles"
//                 },
//                 "contactPrimaryPhone": "508-866-2526",
//                 "contactSecondaryPhone": "0",
//                 "contactAddress": {
//                     "contactStreet": "194 Cranberry Rd.",
//                     "contactCity": "Carver",
//                     "contactState": "MA",
//                     "contactZip": "02330"
//                 },
//                 "contactEmail": "MStandish@gmail.com",
//                 "relationToProspect": "friend",
//                 "referralSource": "friend",
//                 "referredBy": "John Smith",
//                 "dateOfFirstContact": "2017-01-01"
//             },
//         });
//     });
// });

it('should exist on GET', function(done) {
    chai.request(app)
        .get('/')
        .end(function(err, res) {
            should.equal(err, null);
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
});
it('should add a client on post');
it('should edit a client on put');
it('should delete a client on delete');
// after(function(done) {
//     Client.remove(function() {
//         done();
//     });
// });
});
// it('should accept correct login information', function(done) {
//     // var data = {
//     //     username: "testUser",
//     //     password: "pass123"
//     // };
//     // chai.request(app)
//     //     .post('/alcis/login')
//     //     .send(data)
//     //     .end(function(err, res) {
//     //         should.equal(err, null);
//     //         res.should.have.status(201);
//     //         done();
//     //     });
// });
// it('should create new client on post', function(done) {
//     chai.request(app)
//         .post('/alcis/clients/')
//         .end(function(err, res) {
//             should.equal(err, null);
//             res.should.have.status(201);
//             done();
//         });

// describe('alcis', function() {
//     
//     it('should search for clients on get', function(done) {
//         chai.request(app)
//             .get('/alcis/clients')
//             .end(function(err, res) {
//                 should.equal(err, null);
//                 res.should.evemtually.be.json;
//                 // res.body.should.be.a('object');
//                 // res.body.should.have.property('firstName');
//                 // res.body.should.have.property('lastName');
//                 // res.body.firstName.should.be.a('string');
//                 // res.body.lastName.should.be.a('string');
//                 done();
//             });
//     });
//     it('should add a client on post');
//     it('should edit a client on put');
//     it('should delete a client on delete');
//     after(function(done) {
//         Client.remove(function() {
//             done();
//         });
//     });
// });
