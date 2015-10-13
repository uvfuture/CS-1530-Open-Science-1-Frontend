var userModel = require('../../models/user'),
    jobModel = require('../../models/job');

module.exports = function(hashID) {
    userModel.hashAuth(heashId);
    //get the corresponding user,
    //else 403 and invalid auth
    //if authenticated, try and delete job and delete corresponding job within the user
};
