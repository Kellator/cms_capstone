var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    administrator: false
});
UserSchema.statics.findByUsername = function(username, callback) {
    return this.findOne({username: username}, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, user);
    });
};
UserSchema.methods.validatePassword = function(password, callback) {
    console.log('validate');
    bcrypt.compare(password, this.password, function(err, isValid) {
        console.log('comparing');
        if(err) {
            console.log('err in comparing');
            callback(err);
            return;
        }
        callback(null, isValid);
        console.log('says valid');
    });
};
var User = mongoose.model('User', UserSchema);

module.exports = User;