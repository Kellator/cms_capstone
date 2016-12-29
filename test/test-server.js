global.DATABASE_URL = 'mongodb://localhost/cms_capstone-test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var Client = require('../models/clients');

var should = chai.should();
var app = server.app;


chai.use(chaiHttp);

describe('Client DB', function() {
    //add before(function(done) { with hard coded data? then after(function(done) {remove
    it('returns status 200', function(done) {
        chai.request(app)
        .get("/")
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        });
    });
})