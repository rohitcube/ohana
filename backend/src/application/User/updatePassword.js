const userRepo = require('../../infrastructure/repos/user');

async function updateUserPassword(req) {
    const { id, password } = req.body;
    const updatedUser = await userRepo().update(id, password);
    return updatedUser;
}

module.exports = {
    updateUserPassword
};