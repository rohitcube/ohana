// createUser.js
const UserSchema = require('../../infrastructure/models/User');
const userRepo = require('../../infrastructure/repos/user');

async function createUser(req) {
  const { username, email, password } = req.body;
  const user = new UserSchema({ username, email, password });
  const savedUser = await userRepo().create(user);
  return savedUser;
}

module.exports = {
  createUser
};