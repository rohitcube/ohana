// user.js (repo)
const UserSchema = require('../models/User');

const userRepo = () => ({
    create: async (userObject) => {
        const account = new UserSchema(userObject);
        await account.save();
        return account;
    },
    // Easy to add more functions here like:
    // findById: async (id) => {...},
    // update: async (id, data) => {...}
});

module.exports = userRepo;