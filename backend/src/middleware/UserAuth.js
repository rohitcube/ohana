const { Joi } = require('../validators/validatorModule');

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

const update = Joi.object({
    id: Joi.string().required(),
    password: Joi.string()
      .max(50)
      .min(8)
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

const validateUpdate = (req, res, next) => {
    const { error } = update.validate(req.body);
    if (error) {
        console.log(error);
      return res.status(400).json({
        status: 'error',
        message: error.details[0].message,
        details: error.details // Optional: full error details
      });
    }
    next();
};


module.exports = {
  validateUpdate,
  validateLogin
};