var userModel = require('../../models/user');

// TODO: return the latest logged in user via session
module.exports = function() {
    return userModel.hashId;
};
