var userModel = require('../../models/user');

//login via mock user model

module.exports = function(username, password) {
    userModel.credsAuth(username, password);
    //return hash...
};
