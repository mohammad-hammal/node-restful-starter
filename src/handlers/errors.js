export const notFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};

export const showErrors = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  });
};
