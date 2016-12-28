var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/');

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

mongoose.connection.once('open', function() {
    var userSchema = mongoose.Schema({
        userName: String, //set up as first initial +last name
        passWord: String 
        });
    var User = mongoose.model('User', userSchema);
});