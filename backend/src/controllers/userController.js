const { createUser } = require('../application/User/createUser');
const { updateUserPassword } = require('../application/User/updatePassword');

const create = async (req, res, next) => {
    try {
        const user = await createUser(req);
        console.log('Created user:', user);
        return res.status(201).json(user)
    } catch (error) {
        return next(error);
    }
};

const updatePassword = async (req, res, next) => {
    try {
        const user = await updateUserPassword(req);
        console.log('Updated user:', user);
        return res.status(200).json(user);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    create,
    updatePassword
};