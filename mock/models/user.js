var job = require('./job');

var user = {
    name: 'Mock Mockerson',
    email: 'email@email.com',
    username: 'username',
    password: 'password',
    hashId: 'V3djDs380DErsF6',
    jobs: [job, job, job],
    hashAuth: function(incomingHashId) {
        if(incomingHashId === this.hashId) {
            return true;
        }
        else {
            return false;
        }
    },
    hashCreds: function(incomingUsername, incomingPassword) {
        if(incomingUsername === this.username && incomingPassword === password) {
            return this.hashId;
        }
        else {
            return false;
        }
    },
    addJob: function(incomingJob) {
        this.jobs.push(incomingJob);
        return true;
    },
    removeJob: function(incomingJobId) {
        for (var i = 0; i < this.jobs.length; i++) {
            if (jobs[i].id === incomingJobId) {
                jobs.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}

module.exports = user;
