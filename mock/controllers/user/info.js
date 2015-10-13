var userModel = require('../../models/user');

//info via mock user model

module.exports = function(hashId) {
    userModel.hashAuth(hashId);
};
