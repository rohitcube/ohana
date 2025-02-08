// user.js (repo)
const UserSchema = require('../models/User');

const userRepo = () => ({
    create: async (userObject) => {
        const account = new UserSchema(userObject);
        await account.save();
        return account;
    },
    findByEmail: async (user_email) => {
      const account =  await UserSchema.findOne({email: user_email});
      return account;
    },
    update: async (id, updated_password) => {
      const account = await UserSchema.findByIdAndUpdate(
        id,
        { password: updated_password },
        { new: true }
      );
      return account;
    }
    // Easy to add more functions here like:
    // findById: async (id) => {...},
    // update: async (id, data) => {...}
    // make acc, update stuff, delete acc? nah
});

module.exports = userRepo;