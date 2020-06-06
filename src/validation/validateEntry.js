const Joi = require('@hapi/joi');

const validateEntry = data => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    comment: Joi.string().required()
  });

  return schema.validate(data);
};

module.exports = validateEntry;
