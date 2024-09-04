const notFoundError = (err, req, res, next) => {
  if (err.name === "NotFoundError") {
    console.log(err);
    res.status(404).send("Messages not found");
  } else {
    next();
  }
};

const globalErrorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong!');
};

module.exports = { notFoundError, globalErrorHandler };
