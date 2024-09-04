const express = require("express");
const path = require("path");
const app = express();
const {
  notFoundError,
  globalErrorHandler,
} = require("./utilis/error_handling/errors/middlewares/notFoundError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/new");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.use(notFoundError);
app.use(globalErrorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
