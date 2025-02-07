const { createUser } = require('../application/User/createUser');

const create = async (req, res, next) => {
    try {
        const user = await createUser(req);
        console.log('Created user:', user);
        return res.status(201).json(user)
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    create
};