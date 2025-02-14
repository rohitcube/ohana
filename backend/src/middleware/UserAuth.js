const { Joi } = require('./validators/validatorModule');

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .max(50)
    .min(8)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

const validateLogin = (req, res, next) => {
    const { error } = login.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        message: error.details[0].message,
        details: error.details // Optional: full error details
      });
    }
    next();
};

module.exports = {
  login,
  validateLogin
};