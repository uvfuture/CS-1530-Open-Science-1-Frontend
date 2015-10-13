var userModel = require('../../models/user');

//logout via mock user model

module.exports = function(hashId) {
    userModel.hashAuth(hashId);
};
