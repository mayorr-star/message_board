const handleNotFoundError = (err, req, res, next) => {
  if (err.name === "NotFoundError") {
    console.log(err);
    res.status(404).send("Messages not found");
  } else {
    next();
  }
};

module.exports = handleNotFoundError;
