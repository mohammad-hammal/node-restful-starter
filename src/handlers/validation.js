const validate = fn => {
  return function(req, res, next) {
    fn(req, res);
    showValidationErrors(req, res, next);
  };
};

const showValidationErrors = (req, res, next) => {
  const errors = req.validationErrors();
  if (errors) {
    const errorsArray = errors.map(err => err.msg);
    return res.status(422).json({ errors: errorsArray });
  }
  next();
};


export default validate;