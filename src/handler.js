const Meta = require("html-metadata-parser");
const joi = require("joi");

const { getAllValidationErros } = require("./utils");
module.exports.getMetadataFromUrl = async (event) => {
  try {
    let { body } = event;
    body = JSON.parse(body);

    // validate the body using Joi
    const schema = joi.object({
      url: joi.string().required().uri(),
    });

    const { error } = schema.validate(body);

    // transform all the validation errors into an array and return a failure
    if (error) {
      const errors = getAllValidationErros(error);
      throw errors;
    }

    const { url } = body;
    const data = await Meta.parser(url);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
  }
};
