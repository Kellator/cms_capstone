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
            res.should.have.status(200);
            done();
        });
    });
    it('should search for clients on get', function(done) {
        chai.request(app)
        .get('/alcis/clients/')
        .end(function(err, res) {
            should.equal(err, null);
            res.should.have.status(201);
            // res.should.be.json;
            // res.body.should.be.a('object');
            // res.body.should.have.property('firstName');
            // res.body.should.have.property('lastName');
            // res.body.firstName.should.be.a('string');
            // res.body.lastName.should.be.a('string');
            done();
        });
    });
    it('should add a client on post');
    it('should edit a client on put');
    it('should delete a client on delete');
});
