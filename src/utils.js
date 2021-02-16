const getAllValidationErros = (error) => {
  return error.details.map(({ message }) => message);
};

module.exports = {
  getAllValidationErros,
};
